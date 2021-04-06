import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styled from "styled-components";

const CountDownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  & > div span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  & > span {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }
`;

const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: var(--blue-dark);
  }

  :disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }

  &.countdownButtonActive {
    background: var(--white);
    color: var(--title);
  }

  &.countdownButtonActive:not(:disabled):hover {
    background: var(--red);
    color: var(--white);

    img {
      filter: invert(1);
    }
  }

  img {
    margin-left: 1rem;
  }
`;

const CurrentTime = styled.div`
  height: 4px;
  background: var(--green);
`;

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    time,
    defaultTime,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const currentTimePorcent = 100 - (time * 100) / (defaultTime * 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <CountDownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountDownContainer>

      {hasFinished ? (
        <CountdownButton disabled>
          Cliclo encerrado <img src="icons/check.svg" alt="" />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <>
              <CountdownButton
                type="button"
                onClick={resetCountdown}
                className={`countdownButtonActive`}
              >
                Abandonar ciclo
                <img src="icons/cancel.svg" alt="" />
              </CountdownButton>
              <CurrentTime style={{ width: `${currentTimePorcent}%` }} />
            </>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
              <img src="icons/play.svg" alt="" />
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
