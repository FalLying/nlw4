import styled from "styled-components";
import Link from "next/link";
import { ChangeEventHandler, useContext, useState } from "react";
import { GithubUserContext } from "../contexts/GithubUserContext";

const InputLogin = styled.input`
  border: none;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
  border-radius: 5px 0px 0px 5px;
  color: var(--white);

  ::placeholder {
    color: var(--text-highlight);
  }

  &:active,
  &:focus,
  &:hover {
    box-shadow: 0 0 1px 2px var(--blue-dark);
    outline: 2px solid var(--blue-dark);
  }

  @media (max-width: 420px) {
    width: 75%;
  }
`;

const ButtonLogin = styled.button`
  border: none;
  border-radius: 0 0.25rem 0.25rem 0;
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bolder;
  padding: 1rem 1.5rem;
  transition: 0.5s background;
  background: var(--green);

  &:disabled {
    background: var(--blue-dark);
  }
`;

const FieldLogin = () => {
  const { setLoggedUser } = useContext(GithubUserContext);
  const [username, setUsername] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    setLoggedUser(username);
  };

  return (
    <>
      <InputLogin
        value={username}
        onChange={(event) => handleUsername(event)}
        onFocus={(event) => (event.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Digite seu username")}
        type="text"
        placeholder="Digite seu username"
      />
      <Link href="/">
        <ButtonLogin
          disabled={username.length === 0}
          onClick={handleClick}
        >{`->`}</ButtonLogin>
      </Link>
    </>
  );
};

export default FieldLogin;
