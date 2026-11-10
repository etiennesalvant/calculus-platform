"use client";

import {
  DiagnosticAnswerRecord,
  MathTrackName,
  PlacementRecommendation,
  TopicMasteryResult,
} from "@/lib/types/curriculumTypes";

// Project lead: Etienne Salvant. Keep browser storage behind this module.
// A session fallback lets lessons work when persistent storage is unavailable.
let sessionProgress: StudentProgressData | null = null;
let persistentStorageFailed = false;
export function localDateKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

const STORAGE_KEY = "calculusPlatformStudentProgress";

export interface CompletedLessonRecord {
  courseSlug: MathTrackName;
  unitSlug: string;
  lessonSlug: string;
  completedAtIsoDate: string;
  practiceProblemsCorrect: number;
  practiceProblemsTotal: number;
}

export interface StudyDayRecord {
  isoDate: string; // e.g. "2026-09-13"
  minutesStudied: number;
}

export interface QuizAttemptRecord {
  courseSlug: MathTrackName;
  // null means this attempt was the course-end exam, not a per-unit quiz.
  unitSlug: string | null;
  attemptType: "unitQuiz" | "courseExam";
  correctCount: number;
  totalCount: number;
  passed: boolean;
  completedAtIsoDate: string;
}

export interface StudentProgressData {
  hasCompletedDiagnostic: boolean;
  diagnosticAnswerRecords: DiagnosticAnswerRecord[];
  latestTopicMasteryResults: TopicMasteryResult[];
  latestPlacementRecommendation: PlacementRecommendation | null;
  completedLessons: CompletedLessonRecord[];
  quizAttempts: QuizAttemptRecord[];
  studyDays: StudyDayRecord[];
  dailyStudyGoalMinutes: number;
}

function getDefaultProgressData(): StudentProgressData {
  return {
    hasCompletedDiagnostic: false,
    diagnosticAnswerRecords: [],
    latestTopicMasteryResults: [],
    latestPlacementRecommendation: null,
    completedLessons: [],
    quizAttempts: [],
    studyDays: [],
    dailyStudyGoalMinutes: 30,
  };
}

export function loadStudentProgress(): StudentProgressData {
  if (typeof window === "undefined") return getDefaultProgressData();
  if (persistentStorageFailed && sessionProgress) return sessionProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return sessionProgress ?? getDefaultProgressData();
    const parsed = JSON.parse(raw) as StudentProgressData;
    const defaults = getDefaultProgressData();
    if (!parsed || typeof parsed !== 'object') return defaults;
    const data = { ...defaults, ...parsed };
    for (const key of ['completedLessons', 'quizAttempts', 'studyDays', 'diagnosticAnswerRecords', 'latestTopicMasteryResults'] as const) {
      if (!Array.isArray(data[key])) return defaults;
      if (data[key].some(item => !item || typeof item !== 'object')) return defaults;
    }
    if (!Number.isFinite(data.dailyStudyGoalMinutes) || data.dailyStudyGoalMinutes <= 0) data.dailyStudyGoalMinutes = 30;
    return data;
  } catch {
    return sessionProgress ?? getDefaultProgressData();
  }
}

function saveStudentProgress(data: StudentProgressData): void {
  if (typeof window === "undefined") return;
  sessionProgress = data;
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  catch { persistentStorageFailed = true; window.dispatchEvent(new Event('progress-storage-unavailable')); }
}

export function recordDiagnosticResults(
  answerRecords: DiagnosticAnswerRecord[],
  masteryResults: TopicMasteryResult[],
  recommendation: PlacementRecommendation
): StudentProgressData {
  const current = loadStudentProgress();
  const updated: StudentProgressData = {
    ...current,
    hasCompletedDiagnostic: true,
    diagnosticAnswerRecords: answerRecords,
    latestTopicMasteryResults: masteryResults,
    latestPlacementRecommendation: recommendation,
  };
  saveStudentProgress(updated);
  return updated;
}

export function recordLessonCompleted(record: CompletedLessonRecord): StudentProgressData {
  const current = loadStudentProgress();
  const withoutDuplicate = current.completedLessons.filter(
    (lesson) =>
      !(
        lesson.courseSlug === record.courseSlug &&
        lesson.unitSlug === record.unitSlug &&
        lesson.lessonSlug === record.lessonSlug
      )
  );
  const updated: StudentProgressData = {
    ...current,
    completedLessons: [...withoutDuplicate, record],
  };
  saveStudentProgress(updated);
  return updated;
}

export function recordQuizAttempt(record: QuizAttemptRecord): StudentProgressData {
  const current = loadStudentProgress();
  const updated: StudentProgressData = {
    ...current,
    // Keep every attempt (so a student can see they improved on a retake)
    // rather than overwriting - the dashboard/unit views read the most
    // recent one via getMostRecentQuizAttempt below.
    quizAttempts: [...current.quizAttempts, record],
  };
  saveStudentProgress(updated);
  return updated;
}

export function getMostRecentQuizAttempt(
  progress: StudentProgressData,
  courseSlug: MathTrackName,
  unitSlug: string | null
): QuizAttemptRecord | undefined {
  const matchingAttempts = progress.quizAttempts.filter(
    (attempt) => attempt.courseSlug === courseSlug && attempt.unitSlug === unitSlug
  );
  return matchingAttempts[matchingAttempts.length - 1];
}

export function recordStudyMinutesForToday(minutesStudied: number): StudentProgressData {
  const current = loadStudentProgress();
  const todayIsoDate = localDateKey();
  const existingDay = current.studyDays.find((day) => day.isoDate === todayIsoDate);

  const updatedStudyDays = existingDay
    ? current.studyDays.map((day) =>
        day.isoDate === todayIsoDate
          ? { ...day, minutesStudied: day.minutesStudied + minutesStudied }
          : day
      )
    : [...current.studyDays, { isoDate: todayIsoDate, minutesStudied: minutesStudied }];

  const updated: StudentProgressData = { ...current, studyDays: updatedStudyDays };
  saveStudentProgress(updated);
  return updated;
}

export function calculateCurrentStudyStreakInDays(progress: StudentProgressData): number {
  const studiedDates = new Set(progress.studyDays.filter((d) => d.minutesStudied > 0).map((d) => d.isoDate));
  let streak = 0;
  const cursor = new Date();
  if (!studiedDates.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (true) {
    const isoDate = localDateKey(cursor);
    if (studiedDates.has(isoDate)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export function setDailyStudyGoal(minutes: number): StudentProgressData {
  const current = loadStudentProgress();
  const updated = { ...current, dailyStudyGoalMinutes: Math.max(5, Math.min(480, Number.isFinite(minutes) ? minutes : 30)) };
  saveStudentProgress(updated);
  return updated;
}
