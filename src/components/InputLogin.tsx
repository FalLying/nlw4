import styled from "styled-components";

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
  &:focus {
    border-color: #414aa3;
  }
`;

const Input = () => (
  <InputLogin type="text" placeholder="Digite seu username" />
);

export default Input;
