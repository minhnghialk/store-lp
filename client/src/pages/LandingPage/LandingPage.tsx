import { Footer } from "../../organisms/Footer";
import { Header } from "../../organisms/Header";
import { MainContent } from "../../organisms/MainContent";
import styles from "./LandingPage.module.css";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
