import React from "react";
import styled from "styled-components";
import { LoginFormLogo } from "./LoginFormLogo";
import { LoginFormTitle } from "./LoginFormTitle";
import { LoginFormActions } from "./LoginFormActions";
import { LoginForm } from "./LoginForm";

const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #d16c00;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
`;

export const LoginContainer: React.FC = () => {
  return (
    <LoginFormContainer>
      <LoginFormLogo />
      <LoginFormTitle />
      <LoginForm />
      <LoginFormActions />
    </LoginFormContainer>
  );
};
