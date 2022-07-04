import pstyles from "../styles/Page.module.scss";
import Page from "../src/renderPage";

export default function Publications() {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Publications</h1>
        <p>
          I'm currently working on my Master's thesis.
          <br />A link to the work will be available on this page when it's
          done.
        </p>
      </div>
    </Page>
  );
}
