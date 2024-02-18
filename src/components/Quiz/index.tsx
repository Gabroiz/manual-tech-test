import styles from "./styles.module.scss";
import { Stepper } from "../Stepper";
import { useQuizContext } from "@/contexts/quizContext";
import { Header } from "../Header";
import { Container } from "../Container";
import { Success } from "../Success";
import { Rejected } from "../Rejected";

export default function Quiz() {
  const {
    questions,
    currentQuestion,
    isQuizCompleted,
    isQuizRejected,
    handleNextQuestion,
    handleSetQuestion,
    handleQuizRejected,
  } = useQuizContext();

  const handleClick = (isRejection: boolean) => {
    if (isRejection === true) {
      handleQuizRejected();
    } else {
      handleNextQuestion();
    }
  };

  return (
    <Container>
      <Header />
      {isQuizCompleted ? (
        <Success />
      ) : isQuizRejected ? (
        <Rejected />
      ) : (
        <div className={styles.quiz}>
          <div className={styles.step}>
            <Stepper />
          </div>
          <div className={styles.quizTitle}>
            <h1>{questions[currentQuestion]?.question}</h1>
          </div>
          <div className={styles.quizOptions}>
            {questions[currentQuestion]?.options.map((option, key) => (
              <button key={key} onClick={() => handleClick(option.isRejection)}>
                {typeof option.value === "string" ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{ __html: option.display }}
                    ></div>
                    <span>{option.value}</span>
                  </>
                ) : (
                  <span>{option.display}</span>
                )}
              </button>
            ))}
          </div>
          {currentQuestion !== 0 && (
            <button
              className={styles.previousButton}
              onClick={() => handleSetQuestion(currentQuestion - 1)}
            >
              Previous Question
            </button>
          )}
        </div>
      )}
    </Container>
  );
}
