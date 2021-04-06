import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { OverlayModal, ContainerModal } from "./Modal";
import styled from "styled-components";

const Container = styled(ContainerModal)`
  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }
  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  & > div > button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }

  & > div {
    padding: 2rem 3rem;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.25rem;

  border: none;
  color: #2aa9e0;
  font-weight: 600;
  background: #f5fcff;
  border-radius: 0px 0px 5px 5px;
  transition: 0.5s;
  img {
    margin-left: 1rem;
  }

  :hover {
    background: #2aa9e0;
    color: var(--white);

    img {
      filter: invert(0%) sepia(100%) saturate(18%) hue-rotate(308deg)
        brightness(150%) contrast(104%);
    }
  }
`;

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <OverlayModal>
      <Container>
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>
        <Button>
          Compartilhar no Twitter
          <img src="icons/twitter.svg" alt="" />
        </Button>
      </Container>
    </OverlayModal>
  );
}
