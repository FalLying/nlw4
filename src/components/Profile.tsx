import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { GithubUserContext } from "../contexts/GithubUserContext";
import styles from "../styles/components/Profile.module.css";

export function Profile({ avatar_url, name }) {
  const { level } = useContext(ChallengeContext);
  // const { getUser, getUserGithub } = useContext(GithubUserContext);

  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
