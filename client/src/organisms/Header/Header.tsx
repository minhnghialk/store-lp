import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <p className={styles["test-color"]}>Header</p>
    </header>
  );
}
