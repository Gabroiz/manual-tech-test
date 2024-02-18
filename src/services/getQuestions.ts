import { QuestionType } from "@/@types/question";
import { api } from "./api";

export async function getQuestions(): Promise<QuestionType[]> {
  const response = api("/questions")
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
}
