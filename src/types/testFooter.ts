export interface TestInstruction {
  id: number;
  text: string;
}

export interface TestFooterProps {
  instructions: TestInstruction[];
  onPrevious?: () => void;
  onNext?: () => void;
}
