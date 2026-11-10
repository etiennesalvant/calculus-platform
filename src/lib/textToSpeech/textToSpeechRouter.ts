import { TextToSpeechRequest, TextToSpeechResult } from "@/lib/textToSpeech/textToSpeechTypes";
import { ElevenLabsTextToSpeechProvider } from "@/lib/textToSpeech/elevenLabsTextToSpeechProvider";
import { GeminiTextToSpeechProvider } from "@/lib/textToSpeech/geminiTextToSpeechProvider";

const elevenLabsProvider = new ElevenLabsTextToSpeechProvider();
const geminiProvider = new GeminiTextToSpeechProvider();

export async function synthesizeSpeechWithBestAvailableProvider(
  request: TextToSpeechRequest
): Promise<TextToSpeechResult & { providerName: string }> {
  if (elevenLabsProvider.isConfigured()) {
    const result = await elevenLabsProvider.synthesizeSpeech(request);
    return { ...result, providerName: elevenLabsProvider.providerName };
  }
  if (geminiProvider.isConfigured()) {
    const result = await geminiProvider.synthesizeSpeech(request);
    return { ...result, providerName: geminiProvider.providerName };
  }
  return {
    isAvailable: false,
    unavailableReason:
      "No text-to-speech provider is connected yet. Add ELEVENLABS_API_KEY or GOOGLE_GEMINI_API_KEY to .env.local.",
    providerName: "none",
  };
}
