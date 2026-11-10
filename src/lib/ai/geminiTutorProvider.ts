import { AiTutorProvider, TutorRequest, TutorResponse } from "@/lib/ai/aiTutorTypes";

// Gemini is routed step-by-step worked-example explanations - it tends to
// be strong at structured, methodical multi-step math walkthroughs.
export class GeminiTutorProvider implements AiTutorProvider {
  providerName = "Google Gemini";

  isConfigured(): boolean {
    return Boolean(process.env.GOOGLE_GEMINI_API_KEY);
  }

  async askTutor(request: TutorRequest): Promise<TutorResponse> {
    if (!this.isConfigured()) {
      return {
        providerName: this.providerName,
        responseText:
          "The Gemini tutor isn't connected yet. Add GOOGLE_GEMINI_API_KEY to .env.local to enable it.",
      };
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const promptText = request.relevantLessonContext
      ? `Lesson context: ${request.relevantLessonContext}\n\nWalk through this step by step for an adult learner returning to math after years away: ${request.studentQuestion}`
      : `Walk through this step by step: ${request.studentQuestion}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }],
      }),
    });

    if (!response.ok) {
      return {
        providerName: this.providerName,
        responseText: `The Gemini tutor returned an error (status ${response.status}). Check your API key and usage limits.`,
      };
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response text was returned.";
    return { providerName: this.providerName, responseText };
  }
}
