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
          <li className={"menuLink"}>
            <a href={""}>About me</a>
          </li>
          <li className={"menuLink"}>
            <a href="/projects">Projects</a>
          </li>
          <li className={"menuLink"}>
            <a href={""}>Academic</a>
          </li>
          <li className={"menuLink"}>
            <a href={"/blog"}>Blog</a>
          </li>
          <li className={"menuLink"}>
            <a href={""}>Contact</a>
          </li>
        </ol>
      </div>
    </Page>
  );
}
