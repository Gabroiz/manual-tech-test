import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useQuizContext } from "@/contexts/quizContext";

export function Header() {
  const { handleQuizStarted } = useQuizContext();

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image
          src="/assets/Symbol2@2x.png"
          alt="logo"
          width={50}
          height={50}
          quality={100}
          onClick={() => handleQuizStarted(false)}
        />
      </Link>
    </header>
  );
}
