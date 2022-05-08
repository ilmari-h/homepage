import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Page.module.scss";
import Sidebar from "../src/sidebar";

export const DEFAULT_LINKS = [
  { title: "About me", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Blog", url: "/blog" },
  { title: "Academic", url: "/academic" },
];

export default function Page({
  sidebar = false,
  sidebarLinks = null,
  children,
}) {
  return (
    <div className={styles.container}>
      {sidebar && <Sidebar links={sidebarLinks ?? DEFAULT_LINKS} />}
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
