import styles from "../styles/Projects.module.scss";
import { useState, useEffect } from "react";
import { BsGithub, BsCodeSlash, BsShieldShaded } from "react-icons/bs";

export default function GithubCard({ name }) {
  const [repoInfo, setRepoInfo] = useState(null);

  // Load repo data from GitHub API
  useEffect(() => {
    const url = `https://api.github.com/repos/ilmari-h/${name}`;
    fetch(url).then(async (res) => {
      return res.json().then(async (data) => {
        setRepoInfo(data);
      });
    });
  }, []);

  return (
    <div className={styles.githubCard}>
      <div>
        / <b>{name}</b>
      </div>
      {repoInfo ? (
        <>
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

            <a
              className={styles.ghStat}
              href={`https://github.com/ilmari-h/${name}`}
            >
              <BsGithub /> <span>Source</span>
            </a>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
