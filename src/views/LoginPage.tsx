import React from "react";
import styled from "styled-components";
import { LoginContainer } from "../components/login/LoginContainer";

const LoginPageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343b4a;
`;

const LoginFormDiv = styled.div`
  min-width: 450px;
  min-height: 300px;
  display: flex;
`;

export const LoginPage: React.FC = () => {
  return (
    <LoginPageDiv>
      <LoginFormDiv>
        <LoginContainer />
      </LoginFormDiv>
    </LoginPageDiv>
  );
};
