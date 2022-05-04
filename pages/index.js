import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Page, { DEFAULT_LINKS } from "../src/renderPage";

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
          {DEFAULT_LINKS.map(({ title, url }) => (
            <li key={title} className={"menuLink"}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ol>
      </div>
    </Page>
  );
}
