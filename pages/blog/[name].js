import pstyles from "../../styles/Page.module.scss";
import styles from "../../styles/Blog.module.scss";
import Page from "../../src/renderPage";
import { getAllPostNames, readMdFile } from "../../src/blogPosts";

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

function dateString(date) {
  const month = date.toLocaleString("default", { month: "short" });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

export default function Post({ postData }) {
  const postDate = new Date(postData.date);
  const editedDate = postData.edited ? new Date(postData.edited) : null;
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>{postData.title}</h1>
        <div className={styles.metadata}>
          <dd>
            {dateString(postDate)}{" "}
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
