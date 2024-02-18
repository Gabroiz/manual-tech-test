import { QuizContextProvider } from "@/contexts/quizContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizContextProvider>
      <Component {...pageProps} />
    </QuizContextProvider>
  );
}
