// The common shape every AI tutor provider implements, so the rest of the
// app never has to know or care whether it's talking to OpenAI, Gemini, or
// Anthropic. See aiProviderRouter.ts for how a task gets matched to whichever
// provider is meant to be strongest at it.

export type TutorTaskType =
  | "stepByStepExplanation" // walking through a worked example slowly
  | "conversationalHelp" // "I'm stuck, can you help me think through this?"
  | "quickHintGeneration" // a single short nudge, not a full explanation
  | "conceptualIntuition"; // "why does this rule actually work?"

export interface TutorRequest {
  taskType: TutorTaskType;
  studentQuestion: string;
  relevantLessonContext?: string;
}

export interface TutorResponse {
  responseText: string;
  providerName: string;
}

export interface AiTutorProvider {
  providerName: string;
  isConfigured(): boolean;
  askTutor(request: TutorRequest): Promise<TutorResponse>;
}
