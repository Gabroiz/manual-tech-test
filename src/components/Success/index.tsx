import styles from "./styles.module.scss";
import { useQuizContext } from "@/contexts/quizContext";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Success() {
  const { handleSetQuestion, currentQuestion } = useQuizContext();
  return (
    <div className={styles.wrapper}>
      <h1>We have the solution for you!</h1>
      <Image src="/assets/success.svg" alt="success" width={400} height={400} />
      <p>
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <Link href={"http://www.manual.co"}>www.manual.co</Link>, and prepare to
        say hello to your new hair!
      </p>
      <button onClick={() => handleSetQuestion(currentQuestion - 1)}>
        <ChevronLeft /> Back to Quiz
      </button>
    </div>
  );
}
