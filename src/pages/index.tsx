import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { useQuizContext } from "@/contexts/quizContext";
import Quiz from "@/components/Quiz";

export default function Home() {
  const { isQuizStarted } = useQuizContext();

  return (
    <>
      {isQuizStarted ? (
        <Quiz />
      ) : (
        <main className={styles.main}>
          <Banner />
          <div className={styles.cardContainer}>
            <h2>What we can help with</h2>
            <div className={styles.card}>
              <Image
                src="/assets/Photo.png"
                alt=""
                width={370}
                height={445}
                quality={100}
              />
              <div
                className={[styles.cardDescription, styles.cardLeft].join(" ")}
              >
                <small>Hair loss</small>
                <span>Hair loss needn't be irreversible. We can help!</span>
                <p>
                  We're working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div
                className={[styles.cardDescription, styles.cardRight].join(" ")}
              >
                <small>Erecetile dysfunction</small>
                <span>
                  Erections can be a tricky thing. But no need to feel down!
                </span>
                <p>
                  We're working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
              <Image
                src="/assets/Photo2.png"
                alt=""
                width={370}
                height={445}
                quality={100}
              />
            </div>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
