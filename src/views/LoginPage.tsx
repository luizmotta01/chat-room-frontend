import React from "react";
import styled from "styled-components";
import { AccessContainer } from "../components/access/common/AccessContainer";
import { LoginForm } from "../components/access/login/LoginForm";
import { LoginFormActions } from "../components/access/login/LoginFormActions";

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
        <AccessContainer
          form={<LoginForm />}
          formActions={<LoginFormActions />}
        />
      </LoginFormDiv>
    </LoginPageDiv>
  );
};
