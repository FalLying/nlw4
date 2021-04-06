import { useContext } from "react";
import styled from "styled-components";
import { LeaderboardContext } from "../contexts/LeaderboardContext";
import { OverlayModal, ContainerModal } from "./Modal";

const Container = styled(ContainerModal)`
  padding: 2rem 3rem;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const ProfileModal = ({
  name,
  challengesCompleted,
  currentExperience,
  profileImg,
}) => {
  const { closeModalProfile } = useContext(LeaderboardContext);

  const handleClick = () => {
    closeModalProfile();
  };

  return (
    <OverlayModal onClick={handleClick}>
      <Container>
        <img src={profileImg} alt="" />
        <h2>{name}</h2>
        <p>
          {challengesCompleted} completados | {currentExperience}xp
        </p>
      </Container>
    </OverlayModal>
  );
};

export default ProfileModal;
