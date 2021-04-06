import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styled from "styled-components";

interface ProfileProps {
  small: boolean;
}

const Container = styled.div.attrs((props: ProfileProps) => ({
  small: props.small || false,
}))`
  display: flex;
  align-items: center;

  & > img {
    width: ${(props) => (props.small ? "3rem" : "5.5rem")};
    height: ${(props) => (props.small ? "3rem" : "5.5rem")};
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-size: ${(props) => (props.small ? "1rem" : "1.5rem")};
    font-weight: 600;
    color: var(--title);
  }

  div p {
    font-size: ${(props) => (props.small ? "0.8rem" : "1rem")};
    margin-top: 0.5rem;
  }

  div p img {
    margin-right: 0.5rem;
  }
`;

export function Profile({ avatar_url, name, level, small = false }) {
  return (
    <Container small={small}>
      <img src={avatar_url} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
