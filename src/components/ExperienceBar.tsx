import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 5rem;

  span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  & > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }
`;

const Span = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <Span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </Span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
}
