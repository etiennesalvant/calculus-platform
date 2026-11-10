import {
  TextToSpeechProvider,
  TextToSpeechRequest,
  TextToSpeechResult,
} from "@/lib/textToSpeech/textToSpeechTypes";

// Gemini TTS is the free/lower-cost fallback when only a Gemini key is
// configured, reusing GOOGLE_GEMINI_API_KEY.
export class GeminiTextToSpeechProvider implements TextToSpeechProvider {
  providerName = "Google Gemini TTS";

  isConfigured(): boolean {
    return Boolean(process.env.GOOGLE_GEMINI_API_KEY);
  }

  async synthesizeSpeech(request: TextToSpeechRequest): Promise<TextToSpeechResult> {
    if (!this.isConfigured()) {
      return {
        isAvailable: false,
        unavailableReason: "Add GOOGLE_GEMINI_API_KEY to .env.local to enable read-aloud via Gemini.",
      };
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: request.textToSpeak }] }],
        generationConfig: { responseModalities: ["AUDIO"] },
      }),
    });

    if (!response.ok) {
      return { isAvailable: false, unavailableReason: `Gemini TTS returned status ${response.status}.` };
    }

    const data = await response.json();
    const base64AudioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64AudioData) {
      return { isAvailable: false, unavailableReason: "Gemini TTS did not return audio data." };
    }
    return { isAvailable: true, base64AudioData };
  }
}
