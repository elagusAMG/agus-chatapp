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

      <main>
        <h1 className="title">Next.js Chat Demo</h1>
        <AblyChatComponent />
      </main>
    </div>
  );
};

export default Home;
