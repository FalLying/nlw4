import CardLogin from "../components/CardLogin";
import styled from "styled-components";
import { GithubUserProvider, GithubData } from "../contexts/GithubUserContext";
import Head from "next/head";

const Container = styled.div`
  background: var(--blue);
  padding: 0 2rem;

  & > div {
    max-width: 1280px;
    display: flex;

    flex-flow: row wrap;

    align-items: center;
    height: 100vh;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

const SideAuth = styled.div`
  display: flex;
  flex-flow: column wrap;

  flex: 1;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 1120px) {
    display: none;
  }
`;

const ImgResponsive = styled.img`
  width: 90%;
  @media (max-width: 320px) {
    width: 75%;
  }
`;

interface LoginProps {
  user: GithubData;
}

export default function Login(props: LoginProps) {
  return (
    <Container>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div>
        <SideSymbol>
          <img src="icons/simbolo.svg" alt="" />
        </SideSymbol>
        <SideAuth>
          <div>
            <div>
              <ImgResponsive src="icons/logo.svg" alt="" />
            </div>
            <H2>Bem-vindo</H2>
            <CardLogin />
          </div>
        </SideAuth>
      </div>
    </Container>
  );
}
