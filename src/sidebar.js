import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Page.module.scss";
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Sidebar({ links }) {
  const [expanded, setExpanded] = useState(false);
  const sidebarStyles = styles.sidebar;
  return (
    <div
      className={expanded ? sidebarStyles : `${sidebarStyles} ${styles.hidden}`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={styles.sidebarExpand}
      >
        {expanded ? <BsChevronLeft /> : <BsChevronRight />}
      </button>
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
          {links.map((link) => (
            <li key={link.title} className={"menuLink"}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
