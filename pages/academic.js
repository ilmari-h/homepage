import pstyles from "../styles/Page.module.scss";
import Page from "../src/renderPage";

export default function Academic() {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Academic</h1>
        <p>
          I'm currently working on my Master's thesis.
          <br />I will post the work on this page when it's done.
        </p>
      </div>
    </Page>
  );
}
