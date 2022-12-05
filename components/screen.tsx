import styles from "../styles/Screen.module.css";

export default function Screen() {
  return (
    <div>
      <div className={styles.screen}>
        <div className={styles.textarea}>
          <span>assssds</span>
        </div>
        <div className={styles.answer}>
          &gt;<input className={styles.answer_input}></input>
        </div>
      </div>
    </div>
  );
}
