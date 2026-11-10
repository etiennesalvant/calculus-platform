export interface TextToSpeechRequest {
  textToSpeak: string;
}

export interface TextToSpeechResult {
  isAvailable: boolean;
  // Base64-encoded audio (mp3), when available, ready to hand to an
  // <audio> element as a data: URL.
  base64AudioData?: string;
  unavailableReason?: string;
}

export interface TextToSpeechProvider {
  providerName: string;
  isConfigured(): boolean;
  synthesizeSpeech(request: TextToSpeechRequest): Promise<TextToSpeechResult>;
}
