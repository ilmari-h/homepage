import pstyles from "../../styles/Page.module.scss";
import styles from "../../styles/Blog.module.scss";
import Page from "../../src/renderPage";
import { getAllPostNames, readMdFile } from "../../src/blogPosts";
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
  return (
    <Page
      sidebar={true}
      sidebarLinks={postData.headers.map((h) => ({ title: h.header, url: "" }))}
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
          <div dangerouslySetInnerHTML={{ __html: postData.html }} />
        </section>
      </div>
    </Page>
  );
}
