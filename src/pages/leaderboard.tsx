import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/SideBar";
import users from "../../leaderboard.json";
import { Profile } from "../components/Profile";
import { useContext, useState } from "react";
import ProfileModal from "../components/ProfileModal";
import {
  LeaderboardProvider,
  LeaderboardContext,
} from "../contexts/LeaderboardContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2rem auto;
`;

const Table = styled.table`
  th {
    padding: 1rem 0;
    opacity: 0.5;
    color: #666666;
    text-transform: uppercase;
    font-size: 0.7rem;
    text-align: left;

    margin-right: 1rem;
  }

  td {
    padding: 1rem 2rem;
    background: var(--white);

    &.${`profile`} {
      min-width: 500px;
    }
    :first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
    :last-child {
      border-radius: 0 0.5rem 0.5rem 0;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
  }

  @media (max-width: 320px) {
    td,
    th {
      padding: 0.5rem;
      text-align: center;
    }

    td {
      :last-child {
        flex-flow: column;
      }
    }
  }

  @media (max-width: 720px) {
    td {
      &.${`profile`} {
        min-width: 0;
      }
    }
  }
`;

const Button = styled.button`
  border: none;
  background: var(--blue);
  color: var(--white);
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

interface currentUserInterface {
  challengesCompleted: number;
  username: string;
  avatar_url: string;
  currentExperience: number;
}

export default function LeaderBoard() {
  const [currentUserSelected, setCurrentUserSelected] = useState(
    {} as currentUserInterface
  );

  const { showProfile, openModalProfile } = useContext(LeaderboardContext);

  function handleClick(event) {
    const currentUser = users.find((user) => user.id == event.target.id);

    setCurrentUserSelected(currentUser);
    openModalProfile();
  }

  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Leaderboard | move.it</title>
        </Head>
        {showProfile && (
          <ProfileModal
            challengesCompleted={currentUserSelected.challengesCompleted}
            name={currentUserSelected.username}
            profileImg={currentUserSelected.avatar_url}
            currentExperience={currentUserSelected.currentExperience}
          />
        )}
        <div>
          <h2>Leaderboard</h2>

          <Table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="profile">
                      <Profile
                        name={item.username}
                        avatar_url={item.avatar_url}
                        level={item.level}
                        small
                      />
                      <Button
                        id={`${item.id}`}
                        onClick={(event) => handleClick(event)}
                      >
                        Ver
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
