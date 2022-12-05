import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a href="https://github.com/BoYeonJang/mercenary" target="_blank" rel="noopener noreferrer">
          source code{" "}
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Github Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
