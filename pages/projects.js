import pstyles from "../styles/Page.module.scss";
import Page from "../src/renderPage";
import GithubCard from "../src/githubCard";

const projects = ["arbtree.rs", "homepage", "Rust-ray-tracing", "dotfiles"];

export default function Projects() {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Projects</h1>
        <p>Things I've been working on.</p>
        <section>
          {projects.map((p) => {
            return <GithubCard key={`gh-card-${p}`} name={p} />;
          })}
        </section>
      </div>
    </Page>
  );
}
