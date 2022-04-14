import Head from "next/head";
import styles from "../styles/Projects.module.scss";
import pstyles from "../styles/Page.module.scss";
import { useState, useEffect } from "react";
import Page from "../src/renderPage";

const githubProjectsApi = [
  "https://api.github.com/repos/ilmari-h/Rust-ray-tracing",
  "https://api.github.com/repos/ilmari-h/rustmd",
  "https://api.github.com/repos/ilmari-h/dotfiles",
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Promise.all(
      githubProjectsApi.map((pr) =>
        fetch(pr).then((res) => {
          return res.json().then((data) => {
            return data;
          });
        })
      )
    ).then((arr) => setProjects(arr));
  }, [projects]);
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Projects</h1>
        <p>Things I've been working on.</p>
        <section className={styles.projectsList}>
          {projects.map((p) => {
            return (
              <div key={`gh-card-${p.name}`} className={styles.githubCard}>
                <div>
                  GitHub / <b>{p.name}</b>
                </div>
                <p>{p.description}</p>
                Languages: <strong>{p.language}</strong>
              </div>
            );
          })}
        </section>
      </div>
    </Page>
  );
}
