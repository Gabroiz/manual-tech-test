import { useState } from "react";
import styles from "./styles.module.scss";
import { Check } from "lucide-react";
import { useQuizContext } from "@/contexts/quizContext";

export function Stepper() {
  const { questions, currentQuestion, handleSetQuestion } = useQuizContext();

  return (
    <div className={styles.stepper}>
      {questions?.map((step, i) => (
        <div key={i} className={styles.stepItem}>
          <div
            className={
              currentQuestion === i
                ? [styles.step, styles.active].join(" ")
                : currentQuestion > i
                ? [styles.step, styles.complete].join(" ")
                : styles.step
            }
            onClick={() => {
              i < currentQuestion && handleSetQuestion(i);
            }}
          >
            {i < currentQuestion ? <Check size={20} /> : i + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
