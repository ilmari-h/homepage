import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Page.module.scss";
import Sidebar from "../src/sidebar";

export default function Page({ sidebar = false, children }) {
  return (
    <div className={styles.container}>
      {sidebar && <Sidebar />}
      <div className={styles.pageContent}>
        <Head>
          <title>Ilmari.dev</title>
          <meta name="description" content="Developer site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
      <footer className={styles.footer}>
        <span className={styles.copyright}>Copyright 2022</span>
      </footer>
    </div>
  );
}
