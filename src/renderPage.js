import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Page.module.scss";
import Sidebar from "../src/sidebar";

export const DEFAULT_LINKS = [
  { title: "About me", url: "/" },
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
          <link rel="icon" href="/code-solid.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        {children}
      </div>
      <footer className={styles.footer}>
        <span className={styles.copyright}>Copyright 2022</span>
      </footer>
    </div>
  );
}
