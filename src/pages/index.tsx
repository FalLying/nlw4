import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { GithubUserContext } from "../contexts/GithubUserContext";
import Navbar from "../components/SideBar";
import { useContext } from "react";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  nameUser: string;
  avatar_url: string;
}

export default function Home(props: HomeProps) {
  const { getLoggedUser } = useContext(GithubUserContext);
  const { name, avatar_url } = getLoggedUser();

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Navbar />
      <div className={styles.containerAdapter}>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile name={name} avatar_url={avatar_url} />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    name,
    avatar_url,
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      nameUser: String(name),
      avatar_url: String(avatar_url),
    },
  };
};
