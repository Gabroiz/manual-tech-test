import { QuestionType } from "@/@types/question";
import { getQuestions } from "@/services/getQuestions";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type QuizContextData = {
  questions: QuestionType[];
  currentQuestion: number;
  isQuizCompleted: boolean;
  isQuizStarted: boolean;
  isQuizRejected: boolean;
  handleNextQuestion: () => void;
  handleQuizStarted: (bool?: boolean) => void;
  handleQuizRejected: () => void;
  handleSetQuestion: (question: number) => void;
};

export const QuizContext = createContext({} as QuizContextData);

export function QuizContextProvider({ children }: { children: ReactNode }) {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isQuizRejected, setIsQuizRejected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleSetQuestion = (question: number) => {
    setCurrentQuestion(question);
    setIsQuizRejected(false);
    setIsQuizCompleted(false);
  };

  const handleQuizStarted = (bool = true) => {
    setIsQuizStarted(bool);
    handleSetQuestion(0);
  };

  const handleQuizRejected = () => {
    setIsQuizRejected(true);
  };

  useEffect(() => {
    getQuestions().then((response) => setQuestions(response));
  }, []);

  useEffect(() => {
    if (currentQuestion !== 0 && currentQuestion === questions?.length) {
      setIsQuizCompleted(true);
    }
  }, [currentQuestion]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        isQuizCompleted,
        isQuizStarted,
        isQuizRejected,
        handleNextQuestion,
        handleQuizStarted,
        handleQuizRejected,
        handleSetQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
