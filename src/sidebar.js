import Image from "next/image";
import styles from "../styles/Page.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarFixed}>
        {/* Add cursive signature logo here or something*/}
        <h1>
          <a href={"/"}>
            <i>
              <strong>Ilmari</strong>
            </i>
            .dev
          </a>
        </h1>
        <ol className={styles.sidebarMenuList}>
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
    </div>
  );
}
