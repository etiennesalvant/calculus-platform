import { AiTutorProvider, TutorRequest, TutorResponse, TutorTaskType } from "@/lib/ai/aiTutorTypes";
import { OpenAiTutorProvider } from "@/lib/ai/openAiTutorProvider";
import { GeminiTutorProvider } from "@/lib/ai/geminiTutorProvider";
import { AnthropicTutorProvider } from "@/lib/ai/anthropicTutorProvider";

// Each task type is matched to whichever provider is meant to play to its
// strengths (see the comment at the top of each provider file). If that
// provider isn't configured, we fall back to the next-best configured one
// rather than failing outright.
const preferredProviderOrderByTaskType: Record<TutorTaskType, AiTutorProvider[]> = (() => {
  const openAi = new OpenAiTutorProvider();
  const gemini = new GeminiTutorProvider();
  const anthropic = new AnthropicTutorProvider();

  return {
    conversationalHelp: [openAi, gemini, anthropic],
    quickHintGeneration: [openAi, gemini, anthropic],
    stepByStepExplanation: [gemini, anthropic, openAi],
    conceptualIntuition: [anthropic, gemini, openAi],
  };
})();

export function getAllTutorProviders(): AiTutorProvider[] {
  return [
    ...new Set(Object.values(preferredProviderOrderByTaskType).flat()),
  ];
}

export async function routeTutorRequest(request: TutorRequest): Promise<TutorResponse> {
  const candidateProviders = preferredProviderOrderByTaskType[request.taskType];
  const firstConfiguredProvider = candidateProviders.find((provider) => provider.isConfigured());

  if (!firstConfiguredProvider) {
    return {
      providerName: "none",
      responseText:
        "No AI tutor provider is connected yet. Add an OpenAI, Gemini, or Anthropic API key to .env.local to turn this on.",
    };
  }

  return firstConfiguredProvider.askTutor(request);
}
