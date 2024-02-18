import styles from "./styles.module.scss";
import { useQuizContext } from "@/contexts/quizContext";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Stepper } from "../Stepper";

export function Success() {
  const { handleSetQuestion, currentQuestion } = useQuizContext();
  return (
    <div className={styles.wrapper}>
      <div className={styles.step}>
        <Stepper />
      </div>
      <h1>We have the solution for you!</h1>
      <Image src="/assets/success.svg" alt="success" width={400} height={400} />
      <p>
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <Link href={"http://www.manual.co"} target="_blank">
          www.manual.co
        </Link>
        , and prepare to say hello to your new hair!
      </p>
      <div className={styles.buttons}>
        <button onClick={() => handleSetQuestion(currentQuestion - 1)}>
          <ChevronLeft size={20} /> Back to Quiz
        </button>
        <Link href={"http://www.manual.co"} target="_blank">
          Go to Manual <ExternalLink size={20} />
        </Link>
      </div>
    </div>
  );
}
