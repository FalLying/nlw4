import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface LoginProviderProps {
  children: ReactNode;
  nameUser: string;
  avatar_url: string;
}

export interface GithubData {
  avatar_url: string;
  name: string;
}

interface contextData {
  setLoggedUser: (username: string) => void;
  getLoggedUser: () => GithubData;
  getUserGithub: (username: string) => Promise<GithubData>;
}

export const GithubUserContext = createContext({} as contextData);

export function GithubUserProvider({ children, ...rest }: LoginProviderProps) {
  const [user, setUser] = useState(
    { avatar_url: rest.avatar_url, name: rest.nameUser } ?? ({} as GithubData)
  );

  async function getUserGithub(username: string): Promise<GithubData> {
    const response = await (
      await fetch(`https://api.github.com/users/${username}`)
    ).json();

    return { avatar_url: response.avatar_url, name: response.name };
  }

  async function setLoggedUser(username: string) {
    const loggedUser = await getUserGithub(username);
    Cookies.set("avatar_url", String(loggedUser.avatar_url));
    Cookies.set("name", String(loggedUser.name));
    setUser(loggedUser);
  }

  function getLoggedUser(): GithubData {
    return user;
  }

  return (
    <GithubUserContext.Provider
      value={{ getLoggedUser, setLoggedUser, getUserGithub }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
