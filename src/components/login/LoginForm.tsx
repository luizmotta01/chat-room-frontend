import React from "react";
import styled from "styled-components";
import { LoginFormInput } from "./LoginFormInput";
import { LoginButton } from "./LoginButton";

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const textOnChange = () => {};

export const LoginForm: React.FC = () => {
  return (
    <FormContainer>
      <FormGroup>
        <LoginFormInput label="Username" onChange={textOnChange} />
        <LoginFormInput label="Password" onChange={textOnChange} />
        <LoginButton onClick={() => {}} />
      </FormGroup>
    </FormContainer>
  );
};
