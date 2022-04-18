import pstyles from "../../styles/Page.module.scss";
import Page from "../../src/renderPage";
import { getAllPostNames } from "../../src/blogPosts";

export async function getStaticPaths() {
  const paths = getAllPostNames();
  console.log("PATHS", paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = params.id ?? {};
  return {
    props: {
      postData,
    },
  };
}

export default function Post() {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}></div>
    </Page>
  );
}
