export type OptionsType = {
  display: string;
  isRejection: boolean;
  value: string | boolean;
};

export type QuestionType = {
  question: string;
  type: string;
  options: OptionsType[];
};
