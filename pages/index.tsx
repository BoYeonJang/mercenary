import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Screen from "../components/screen";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercenary</title>
        <meta name="description" content="Mercenary is a text game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Screen />
      </main>
      <Footer />
    </div>
  );
}
