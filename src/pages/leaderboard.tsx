import Head from "next/head";
import styled from "styled-components";
import { Profile } from "../components/Profile";
import Navbar from "../components/SideBar";
import users from "../../leaderboard.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2rem auto;
  /* padding: 2.5rem 2rem; */
`;

const Table = styled.table`
  th {
    padding: 1rem 0;
    opacity: 0.5;
    color: #666666;
    text-transform: uppercase;
    font-size: 0.7rem;
    text-align: left;
  }

  td {
    padding: 1rem 2rem;
    background: var(--white);

    &.${`profile`} {
      min-width: 600px;
    }
    :first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
    :last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  @media (max-width: 540px) {
    td,
    th {
      display: inline-block;
    }
  }

  @media (max-width: 1280px) {
    td {
      &.${`profile`} {
        min-width: 0;
      }
    }
  }
`;

export default function LeaderBoard() {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Leaderboard | move.it</title>
        </Head>
        <div>
          <h2>Leaderboard</h2>

          <Table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Desafios</th>
                <th>Experiência</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td className="profile">{item.username}</td>
                  <td>{item.challengesCompleted} completados</td>
                  <td>{item.currentExperience}</td>
                </tr>
              ))}
              {/* <tr>
                <td>1</td>
                <td className="profile">teste 1</td>
                <td>127 completados</td>
                <td>15000xp</td>
              </tr>
              <tr>
                <td>2</td>
                <td>teste 2</td>
                <td>56 completados</td>
                <td>1500980xp</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
