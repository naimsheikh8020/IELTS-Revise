export type TestStepId =
  | "listening"
  | "reading"
  | "writing"
  | "speaking";

export interface TestStep {
  id: TestStepId;
  label: string;
  duration: string;
  isActive: boolean;
}

export interface IeltsTestHeaderProps {
  steps: TestStep[];
  timeRemaining: string;
  answeredQuestions: number;
  totalQuestions: number;
}


