import { AiTutorProvider, TutorRequest, TutorResponse } from "@/lib/ai/aiTutorTypes";

// Anthropic (Claude) is routed conceptual-intuition questions - "why does
// this actually work" - where careful, well-reasoned explanation matters
// more than speed.
export class AnthropicTutorProvider implements AiTutorProvider {
  providerName = "Anthropic (Claude)";

  isConfigured(): boolean {
    return Boolean(process.env.ANTHROPIC_API_KEY);
  }

  async askTutor(request: TutorRequest): Promise<TutorResponse> {
    if (!this.isConfigured()) {
      return {
        providerName: this.providerName,
        responseText:
          "The Claude tutor isn't connected yet. Add ANTHROPIC_API_KEY to .env.local to enable it.",
      };
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-latest",
        max_tokens: 1024,
        system:
          "You are a math tutor helping an adult learner returning to math after 10+ years away. Focus on WHY a rule or technique works, using plain-English intuition before formal notation.",
        messages: [
          {
            role: "user",
            content: request.relevantLessonContext
              ? `Lesson context: ${request.relevantLessonContext}\n\nStudent question: ${request.studentQuestion}`
              : request.studentQuestion,
          },
        ],
      }),
    });

    if (!response.ok) {
      return {
        providerName: this.providerName,
        responseText: `The Claude tutor returned an error (status ${response.status}). Check your API key and usage limits.`,
      };
    }

    const data = await response.json();
    const responseText = data.content?.[0]?.text ?? "No response text was returned.";
    return { providerName: this.providerName, responseText };
  }
}
