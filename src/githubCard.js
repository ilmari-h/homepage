import styles from "../styles/Projects.module.scss";
import { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";

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
            <div>
              Language: <span>{repoInfo.language}</span>
            </div>
            <a href={`https://github.com/ilmari-h/${name}`}>
              <div className={styles.GhLink}>
                <BsGithub /> go to repo {">"}
              </div>
            </a>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
