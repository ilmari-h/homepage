import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Page from "../src/renderPage";

export default function Home() {
  return (
    <Page sidebar={false}>
      <div className={styles.menuContainer}>
        <h1>
          <i>
            <strong>Ilmari</strong>
          </i>
          .dev
        </h1>{" "}
        {/* Add cursive signature logo here or something*/}
        <ol className={styles.menuList}>
          <li>About me</li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>Academic</li>
          <li>Contact</li>
        </ol>
      </div>
    </Page>
  );
}
