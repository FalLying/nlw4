import ButtonLogin from "../components/ButtonLogin";
import Card from "../components/CardLogin";
import InputLogin from "../components/InputLogin";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  flex-flow: row wrap;

  align-items: center;
  background: var(--blue);

  height: 100vh;
`;

const SideAuth = styled.div`
  display: flex;
  flex-flow: column wrap;

  flex: 1;
  align-items: center;
  justify-content: center;
  height: 660px;

  & > div > div:first-child {
    margin-bottom: 3rem;
  }

  & > div > div:last-child {
    margin-top: 2rem;
  }
`;

const H2 = styled.h2`
  color: var(--white);
  margin: 1.5rem 0;

  font-size: 2rem;
`;

const SideSymbol = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1060px) {
    display: none;
  }
`;

export default function Login() {
  return (
    <Container>
      <SideSymbol>
        <img src="icons/simbolo.svg" alt="" />
      </SideSymbol>
      <SideAuth>
        <div>
          <div>
            <img src="icons/logo.svg" alt="" />
          </div>
          <H2>Bem-vindo</H2>
          <Card />
          <div>
            <InputLogin />
            <ButtonLogin />
          </div>
        </div>
      </SideAuth>
    </Container>
  );
}
