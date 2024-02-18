import { QuestionType } from "@/@types/question";

export async function getQuestions(): Promise<QuestionType[]> {
  const response = await fetch("http://localhost:3000/api/v1/questions");
  return response.json();
}
