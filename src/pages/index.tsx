import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import {
  ChallengeContext,
  ChallengesProvider,
} from "../contexts/ChallengesContext";
import { GithubUserContext } from "../contexts/GithubUserContext";
import Navbar from "../components/SideBar";
import { useContext } from "react";
import styled from "styled-components";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  nameUser: string;
  avatar_url: string;
}

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 780px) {
    section {
      display: flex;
      flex-flow: column wrap;
    }

    section > div:last-child {
      padding: 2rem 0;
    }
  }
`;

const ContainerAdapter = styled.div`
  margin-left: 80px;

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

export default function Home(props: HomeProps) {
  const { getLoggedUser } = useContext(GithubUserContext);
  const { name, avatar_url } = getLoggedUser();
  const { level } = useContext(ChallengeContext);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Navbar />
      <ContainerAdapter>
        <Container>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile
                  name={name}
                  avatar_url={avatar_url}
                  level={props.level}
                />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Container>
      </ContainerAdapter>
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
