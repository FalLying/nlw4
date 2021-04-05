import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const SideBar = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  height: 100%;
  width: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;

  & img {
    margin-top: 2rem;
  }

  @media (max-width: 520px) {
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    position: relative;
    height: 80px;
    width: 100%;

    align-items: center;

    & img {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  flex: 1;

  @media (max-width: 520px) {
    flex-flow: row wrap;
    justify-items: center;
    justify-content: center;
  }
`;

const Item = styled.a`
  opacity: 0.5;
  & > img {
    cursor: pointer;
    margin-left: 1.25rem;
  }

  &.${`active`} {
    opacity: 1;
    & > img {
      filter: invert(47%) sepia(76%) saturate(4563%) hue-rotate(221deg)
        brightness(92%) contrast(89%);
    }
    ::before {
      content: "";
      border-left: 3px solid var(--blue);
      padding-top: 2rem;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  @media (max-width: 520px) {
    margin-left: 2rem;
  }
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <SideBar>
      <div>
        <img src="icons/logo-navbar.svg" alt="" />
      </div>
      <Nav>
        <Item className={router.pathname == "/" && `active`}>
          <Link href="/">
            <img src="icons/home.svg" alt="" />
          </Link>
        </Item>
        <Item className={router.pathname == "/leaderboard" && `active`}>
          <Link href="/leaderboard">
            <img src="icons/award.svg" alt="" />
          </Link>
        </Item>
        <Item className={router.pathname == "/login" && `active`}>
          <Link href="/login">
            <img src="icons/exit.svg" alt="" />
          </Link>
        </Item>
      </Nav>
    </SideBar>
  );
};

export default Navbar;
