import pstyles from "../styles/Page.module.scss";
import Page from "../src/renderPage";
import GithubCard from "../src/githubCard";
import { getGhKeyAPI } from "../src/buildTime";

const projects = [
  "dlv-tui",
  "bettit",
  "arbtree.rs",
  "homepage",
  "Rust-ray-tracing",
  "dotfiles",
];

export async function getStaticProps() {
  const getRepo = async (name) => {
    const { key } = getGhKeyAPI();
    const url = `https://api.github.com/repos/ilmari-h/${name}`;
    const hdr = new Headers({
      authorization: `Bearer ${key}`,
    });
    return fetch(url, { headers: hdr }).then(async (res) => {
      return res.json();
    });
  };

  const repoData = await Promise.all(projects.map(getRepo));
  return {
    props: {
      repoData,
    },
  };
}

export default function Projects({ repoData }) {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Projects</h1>
        <p>Things I've been working on.</p>
        <section>
          {repoData.map((repo) => {
            return <GithubCard key={`gh-card-${repo.name}`} repoInfo={repo} />;
          })}
        </section>
      </div>
    </Page>
  );
}
