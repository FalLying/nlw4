import styled from "styled-components";

const CardLogin = styled.div`
  display: flex;
  align-items: center;
`;

const ImgCardLogin = styled.img``;

const TextCardLogin = styled.p`
  color: var(--text-highlight);
  margin: 0 1.5rem;
`;

const Card = () => (
  <CardLogin>
    <ImgCardLogin src="icons/git.svg" />
    <TextCardLogin>Faça login com seu github para começar</TextCardLogin>
  </CardLogin>
);

export default Card;
