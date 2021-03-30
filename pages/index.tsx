import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

const AblyChatComponent = dynamic(
  () => import("../components/AblyChatComponent"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Los Kaiza Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Los Kaiza Chat App</h1>
        <AblyChatComponent />
      </main>

      <footer className={styles.footer}>
        <p>Developed by Agustin Moya</p>
      </footer>
    </div>
  );
};

export default Home;
