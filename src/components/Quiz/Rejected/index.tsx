import Image from "next/image";
import styles from "./styles.module.scss";
import { useQuizContext } from "@/contexts/quizContext";
import { ChevronLeft } from "lucide-react";

export function Rejected() {
  const { handleSetQuestion, currentQuestion } = useQuizContext();
  return (
    <div className={styles.wrapper}>
      <h1>You are not eligible</h1>
      <Image
        src="/assets/rejected.svg"
        alt="rejected"
        width={400}
        height={400}
      />
      <p>
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </p>
      <button onClick={() => handleSetQuestion(currentQuestion)}>
        <ChevronLeft /> Back to Quiz
      </button>
    </div>
  );
}
