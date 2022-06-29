import styles from "../styles/GhActivity.module.scss";
import {
  BsGithub,
  BsCodeSlash,
  BsShieldShaded,
  BsFillStarFill,
} from "react-icons/bs";
import { IoGitBranch } from "react-icons/io5";

export default function GithubCard({ repoInfo }) {
  return (
    <div className={styles.githubCard}>
      <div>
        / <b>{repoInfo.name}</b>
      </div>
      <p>{repoInfo.description}</p>
      <div className={styles.bottomRow}>
        {repoInfo.stargazers_count > 0 && (
          <div className={styles.ghStat}>
            <BsFillStarFill /> <span>{repoInfo.stargazers_count}</span>
          </div>
        )}

        {repoInfo.forks_count > 0 && (
          <div className={styles.ghStat}>
            <IoGitBranch /> <span>{repoInfo.forks_count}</span>
          </div>
        )}

        <div className={styles.ghStat}>
          <BsCodeSlash /> <span>{repoInfo.language}</span>
        </div>

        {repoInfo.license && (
          <div className={styles.ghStat}>
            <BsShieldShaded /> <span>{repoInfo.license.name}</span>
          </div>
        )}

        <a
          className={styles.ghStat}
          href={`https://github.com/ilmari-h/${repoInfo.name}`}
        >
          <BsGithub /> <span>Repo</span>
        </a>
      </div>
    </div>
  );
}
