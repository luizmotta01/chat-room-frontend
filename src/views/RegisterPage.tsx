import React from "react";
import styled from "styled-components";
import { AccessContainer } from "../components/access/common/AccessContainer";
import { RegisterForm } from "../components/access/register/RegisterForm";
import { RegisterFormActions } from "../components/access/register/RegisterFormActions";

const RegisterPageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343b4a;
`;

const RegisterFormDiv = styled.div`
  min-width: 450px;
  min-height: 300px;
  display: flex;
`;

export const RegisterPage: React.FC = () => {
  return (
    <RegisterPageDiv>
      <RegisterFormDiv>
        <AccessContainer
          form={<RegisterForm />}
          formActions={<RegisterFormActions />}
        />
      </RegisterFormDiv>
    </RegisterPageDiv>
  );
};
