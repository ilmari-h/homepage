import Head from "next/head";
import styles from "../styles/Projects.module.scss";
import pstyles from "../styles/Page.module.scss";
import { useState, useEffect } from "react";
import Page from "../src/renderPage";
import GitHubCalendar from "react-github-calendar";

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
        <section>
          {projects.map((p) => {
            return (
              <div key={`gh-card-${p.name}`} className={styles.githubCard}>
                <div>
                  / <b>{p.name}</b>
                </div>
                <p>{p.description}</p>
                <div className={styles.languagesList}>
                  Languages: <span>{p.language}</span>
                </div>
              </div>
            );
          })}
        </section>
        <h1>GitHub activity</h1>
        <section>
          <div className={styles.githubCalendarContainer}>
            <div class={styles.githubCalendar}>
              <div class={styles.githubCalendarGrid}>
                <GitHubCalendar
                  username="ilmari-h"
                  color={"#b51233"}
                  hideColorLegend
                  hideTotalCount
                  blockSize={14}
                />
              </div>
            </div>
          </div>
          <p>
            See <a href="https://github.com/ilmari-h">my GitHub page</a> for
            more stuff.
          </p>
        </section>
      </div>
    </Page>
  );
}
