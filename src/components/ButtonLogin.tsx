import styled from "styled-components";

const ButtonLogin = styled.button`
  background: var(--blue-dark);
  border: none;
  border-radius: 0 0.25rem 0.25rem 0;
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bolder;
  padding: 1rem 1.5rem;
  transition: 0.5s background;

  &:hover {
    background: #4cd62b;
  }
`;

const Button = () => <ButtonLogin>-></ButtonLogin>

export default Button;
