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
        <ol class={styles.sidebarMenuList}>
          <li>About me</li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>Academic</li>
          <li>Blog</li>
          <li>Contact</li>
        </ol>
      </div>
    </div>
  );
}
