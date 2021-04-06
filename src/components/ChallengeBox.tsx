import { useContext } from "react";
import styled from "styled-components";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

const ChallengesBoxContainer = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  p img {
    margin-bottom: 1rem;
  }
`;

const ChallengeActive = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong {
    font-weight: 600;
    font-size: 2rem;
    color: var(--title);
    margin: 1.5rem 0 1rem;
  }

  main p {
    line-height: 1.5;
  }
`;

const ChallengeFooter = styled.footer`
  display: flex;
  width: 100%;

  button {
    height: 5rem;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #dcdde0;
    border-right: 0.5px;

    color: var(--white);

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
  }

  button.challengeFailedButton {
    background: #e83f5b22;
    color: #e83f5b;
    transition: 0.5s;
  }

  button.challengeFailedButton:hover {
    background: var(--red);
    color: var(--white);
  }

  button.challengeSucceededButton {
    background: #4cd62b22;
    color: #4cd62b;
    transition: 0.5s;
  }

  button.challengeSucceededButton:hover {
    background: var(--green);
    color: var(--white);
  }

  button:hover {
    filter: brightness(0.9);
  }
`;

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengesBoxContainer>
      {activeChallenge ? (
        <>
          <ChallengeActive>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
          </ChallengeActive>
          <ChallengeFooter>
            <button
              onClick={handleChallengeFailed}
              className="challengeFailedButton"
              type="button"
            >
              Falhei
            </button>
            <button
              onClick={handleChallengeSucceeded}
              className="challengeSucceededButton"
              type="button"
            >
              Completei
            </button>
          </ChallengeFooter>
        </>
      ) : (
        <ChallengeNotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados.
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Complete-os e ganhe experiência e avance de nível.
          </p>
        </ChallengeNotActive>
      )}
    </ChallengesBoxContainer>
  );
}
