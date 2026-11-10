import {
  TextToSpeechProvider,
  TextToSpeechRequest,
  TextToSpeechResult,
} from "@/lib/textToSpeech/textToSpeechTypes";

// ElevenLabs is the higher-quality, more natural-sounding option - good
// default for longer lesson read-alouds.
export class ElevenLabsTextToSpeechProvider implements TextToSpeechProvider {
  providerName = "ElevenLabs";
  private readonly defaultVoiceId = "21m00Tcm4TlvDq8ikWAM"; // ElevenLabs' public "Rachel" voice

  isConfigured(): boolean {
    return Boolean(process.env.ELEVENLABS_API_KEY);
  }

  async synthesizeSpeech(request: TextToSpeechRequest): Promise<TextToSpeechResult> {
    if (!this.isConfigured()) {
      return {
        isAvailable: false,
        unavailableReason: "Add ELEVENLABS_API_KEY to .env.local to enable read-aloud via ElevenLabs.",
      };
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${this.defaultVoiceId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY ?? "",
        },
        body: JSON.stringify({
          text: request.textToSpeak,
          model_id: "eleven_multilingual_v2",
        }),
      }
    );

    if (!response.ok) {
      return { isAvailable: false, unavailableReason: `ElevenLabs returned status ${response.status}.` };
    }

    const audioBuffer = await response.arrayBuffer();
    const base64AudioData = Buffer.from(audioBuffer).toString("base64");
    return { isAvailable: true, base64AudioData };
  }
}
