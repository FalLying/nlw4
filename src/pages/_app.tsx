import { GetServerSideProps } from "next";
import { GithubUserProvider } from "../contexts/GithubUserContext";
import { LeaderboardProvider } from "../contexts/LeaderboardContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <GithubUserProvider
      nameUser={pageProps.nameUser}
      avatar_url={pageProps.avatar_url}
    >
      <LeaderboardProvider>
        <Component {...pageProps} />
      </LeaderboardProvider>
    </GithubUserProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { avatar_url, name } = ctx.req.cookies;
  return {
    props: {
      nameUser: String(name),
      avatar_url: String(avatar_url),
    },
  };
};

export default MyApp;
