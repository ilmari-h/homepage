import styles from "../styles/Projects.module.scss";
import pstyles from "../styles/Page.module.scss";
import { useState, useEffect } from "react";
import Page from "../src/renderPage";
import GithubCard from "../src/githubCard";
import GitHubCalendar from "react-github-calendar";

const projects = [
  "rustmd",
  "arbtree.rs",
  "homepage",
  "Rust-ray-tracing",
  "dotfiles",
];

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
        <h1>GitHub activity</h1>
        <section>
          <div className={styles.githubCalendarContainer}>
            <div className={styles.calendarFadeOverlay} />
            <div className={styles.githubCalendar}>
              <div className={styles.githubCalendarGrid}>
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
