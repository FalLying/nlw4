import { createContext, useState } from "react";

interface GithubData {
  avatar_url: string;
  name: string;
}

export const GithubUserContext = createContext({});

export function GithubUserProvider({ children }) {
  const [user, setUser] = useState({} as GithubData);

  async function setLoggerUser(username: string) {
    const githubUser = await (
      await fetch(`https://api.github.com/users/${username}`)
    ).json();

    setUser({ avatar_url: githubUser.avatar_url, name: githubUser.name });
  }

  return (
    <GithubUserContext.Provider
      value={{
        user,
        setUser,
        setLoggerUser,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
