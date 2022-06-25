import styles from "../styles/GhActivity.module.scss";
import {
  BsGithub,
  BsCodeSlash,
  BsShieldShaded,
  BsFillStarFill,
} from "react-icons/bs";

export default function GithubCard({ repoInfo }) {
  return (
    <div className={styles.githubCard}>
      <div>
        / <b>{repoInfo.name}</b>
      </div>
      <p>{repoInfo.description}</p>
      <div className={styles.bottomRow}>
        <div className={styles.ghStat}>
          <BsCodeSlash /> <span>{repoInfo.language}</span>
        </div>

        {repoInfo.license && (
          <div className={styles.ghStat}>
            <BsShieldShaded /> <span>{repoInfo.license.name}</span>
          </div>
        )}

        {repoInfo.stargazers_count > 0 && (
          <div className={styles.ghStat}>
            <BsFillStarFill />{" "}
            <span style={{ marginLeft: 4 }}>{repoInfo.stargazers_count}</span>
          </div>
        )}

        <a
          className={styles.ghStat}
          href={`https://github.com/ilmari-h/${repoInfo.name}`}
        >
          <BsGithub /> <span>Source</span>
        </a>
      </div>
    </div>
  );
}
