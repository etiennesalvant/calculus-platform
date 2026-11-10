import { AiTutorProvider, TutorRequest, TutorResponse } from "@/lib/ai/aiTutorTypes";

// OpenAI is routed conversational help and quick hints - GPT models are
// strong at fast, natural back-and-forth tutoring dialogue.
//
// This is a real fetch() call against the OpenAI Chat Completions API,
// gated behind OPENAI_API_KEY. With no key set, isConfigured() returns
// false and the UI shows a "connect a key" message instead of calling this.
export class OpenAiTutorProvider implements AiTutorProvider {
  providerName = "OpenAI (GPT)";

  isConfigured(): boolean {
    return Boolean(process.env.OPENAI_API_KEY);
  }

  async askTutor(request: TutorRequest): Promise<TutorResponse> {
    if (!this.isConfigured()) {
      return {
        providerName: this.providerName,
        responseText:
          "The OpenAI tutor isn't connected yet. Add OPENAI_API_KEY to .env.local to enable it.",
      };
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a patient math tutor helping an adult learner returning to math after 10+ years away. Be encouraging, concrete, and never condescending.",
          },
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
        responseText: `The OpenAI tutor returned an error (status ${response.status}). Check your API key and usage limits.`,
      };
    }

    const data = await response.json();
    return {
      providerName: this.providerName,
      responseText: data.choices?.[0]?.message?.content ?? "No response text was returned.",
    };
  }
}
