import pstyles from "../styles/Page.module.scss";
import styles from "../styles/GhActivity.module.scss";
import Page from "../src/renderPage";
import GitHubCalendar from "react-github-calendar";
import { getPersonalInfo } from "../src/buildTime";

export async function getStaticProps() {
  const { myName, workingAt } = getPersonalInfo();
  return {
    props: {
      myName,
      workingAt,
    },
  };
}

export default function About({ myName, workingAt }) {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>About me</h1>
        <p>
          Hi. I'm {myName}, <a href="https://github.com/ilmari-h">@ilmari-h</a>{" "}
          on GitHub. A Finnish software developer currently working at{" "}
          {workingAt}. In 2022 I graduated with a Bachelor's degree in Software
          Engineering. Currently also working on the latter half of my Master's
          degree, with graduation looming in the near future of 2023.
        </p>

        <p>
          I enjoy contributing to open source, tinkering with libraries and
          frameworks, and building my own projects. Sometimes I also write{" "}
          <a href="/blog">blog posts</a> about things I'm working on.
        </p>

        <p>
          Got questions, comments, greetings?
          <br />
          You can reach me via email at:{" "}
          <a href={"mailto:mail@ilmari.dev"}>mail@ilmari.dev</a>
        </p>
        <section>
          <h1>GitHub activity</h1>
          <p>How busy I've been lately.</p>
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
        </section>
        <section>
          <h1>Donate</h1>
          <p></p>
          <p>
            Monero:{" "}
            <code style={{ wordBreak: "break-all" }}>
              48QiCovstDPbHtMR5DP8tp3fUgguVUcdUX2pjbh6utt88fMe5h233ZnY7PxxdQYCjrVuCBQA2D8JBYU7rH2MdVDHFKd7QJi
            </code>
          </p>
        </section>
      </div>
    </Page>
  );
}
