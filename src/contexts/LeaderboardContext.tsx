import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface DataType {
  showProfile: boolean;
  closeModalProfile: () => void;
  openModalProfile: () => void;
}

export const LeaderboardContext = createContext({} as DataType);

export const LeaderboardProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  function closeModalProfile() {
    setShowProfile(false);
  }

  function openModalProfile() {
    setShowProfile(true);
  }

  return (
    <LeaderboardContext.Provider
      value={{ showProfile, closeModalProfile, openModalProfile }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};
