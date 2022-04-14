import Image from "next/image";
import styles from "../styles/Page.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* Add cursive signature logo here or something*/}
      <h1>
        <a href={"/"}>
          <i>
            <strong>Ilmari</strong>
          </i>
          .dev
        </a>
      </h1>
    </div>
  );
}
