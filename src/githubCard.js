import styles from "../styles/GhActivity.module.scss";
import {
  BsGithub,
  BsCodeSlash,
  BsFillStarFill,
  BsLink45Deg,
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
          <div title="GitHub stars" className={styles.ghStat}>
            <BsFillStarFill /> <span>{repoInfo.stargazers_count}</span>
          </div>
        )}

        {repoInfo.forks_count > 0 && (
          <div title="Forks" className={styles.ghStat}>
            <IoGitBranch /> <span>{repoInfo.forks_count}</span>
          </div>
        )}

        <div title="Repository language" className={styles.ghStat}>
          <BsCodeSlash /> <span>{repoInfo.language}</span>
        </div>

        {repoInfo.homepage && (
          <a href={repoInfo.homepage} title="website" className={styles.ghStat}>
            <BsLink45Deg />
            <span>Website</span>
          </a>
        )}

        <a
          title="Repository"
          className={styles.ghStat}
          href={`https://github.com/ilmari-h/${repoInfo.name}`}
        >
          <BsGithub /> <span>Repository</span>
        </a>
      </div>
    </div>
  );
}
