import styled from "styled-components";
import FieldLogin from "./FieldLogin";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const CardLogin = styled.div`
  display: flex;
  align-items: center;

  margin: 1.5rem 0;
`;

const ImgCardLogin = styled.img``;

const TextCardLogin = styled.p`
  color: var(--text-highlight);
  margin: 0 1.5rem;
`;

const Card = () => (
  <Container>
    <CardLogin>
      <ImgCardLogin src="icons/git.svg" />
      <TextCardLogin>Faça login com seu github para começar</TextCardLogin>
    </CardLogin>
    <div>
      <FieldLogin />
    </div>
  </Container>
);

export default Card;
