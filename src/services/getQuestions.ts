import { QuestionType } from "@/@types/question";

export async function getQuestions(): Promise<QuestionType[]> {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(API_BASE);
  return response.json();
}
