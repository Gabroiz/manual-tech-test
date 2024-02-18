import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useQuizContext } from "@/contexts/quizContext";

export function Banner() {
  const { handleQuizStarted } = useQuizContext();

  return (
    <div className={styles.bannerImage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image
            src="/assets/Symbol2@2x.png"
            className={styles.logoImage}
            alt="logo"
            width={100}
            height={100}
            quality={100}
          />
        </header>

        <div className={styles.bannerText}>
          <h1>Be good to yourself</h1>
          <p>
            We&apos;re working around the clock to bring you a holistic approach
            to your wellness. From top to bottom, inside and out.{" "}
          </p>
          <button onClick={() => handleQuizStarted()}>Take the quiz</button>
        </div>
      </div>
    </div>
  );
}
