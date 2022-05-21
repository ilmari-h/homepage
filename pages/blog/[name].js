import { useRef, useEffect } from "react";
import pstyles from "../../styles/Page.module.scss";
import styles from "../../styles/Blog.module.scss";
import Page from "../../src/renderPage";
import { useHash } from "../../src/useHash";
import { getAllPostNames, readMdFile } from "../../src/buildTime";
import { dateString } from "../blog";
import { BsArrowReturnLeft } from "react-icons/bs";

export async function getStaticPaths() {
  const paths = getAllPostNames();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await readMdFile(`${params.name}.md`);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const editedDate = postData.edited ? new Date(postData.edited) : null;
  const articleElement = useRef(null);
  const [hash, _] = useHash();
  useEffect(() => {
    if (!hash) return;
    const chapterHeaders = articleElement.current.querySelectorAll("h2");
    const index = Number(hash.charAt(hash.indexOf("=") + 1));
    chapterHeaders[index].scrollIntoView({ behavior: "smooth" });
  }, [hash]);
  return (
    <Page
      sidebar={true}
      sidebarLinks={postData.headers.map((h, i) => ({
        title: h.header,
        url: `#chapter=${i}`,
      }))}
    >
      <div className={pstyles.contentPage}>
        <a className={styles.backNavLink} href={"/blog"}>
          <dd className={styles.backNavHeader}>
            Blog / Posts <BsArrowReturnLeft />
          </dd>
        </a>
        <h1>{postData.title}</h1>
        <div className={styles.metadata}>
          <dd>
            {dateString(postData.date)}{" "}
            {editedDate ? `Edited ${dateString(editedDate)}` : ""}
          </dd>
        </div>
        <section className={styles.blogSection}>
          <div
            ref={articleElement}
            dangerouslySetInnerHTML={{ __html: postData.html }}
          />
        </section>
      </div>
    </Page>
  );
}
