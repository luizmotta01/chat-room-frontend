import React from "react";
import styled from "styled-components";
import { AccessInput } from "../common/AccessInput";
import { AccessButton } from "../common/AccessButton";

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
        <AccessInput label="Username" type="text" onChange={textOnChange} />
        <AccessInput label="Password" type="password" onChange={textOnChange} />
        <AccessButton onClick={() => {}} label="Login" />
      </FormGroup>
    </FormContainer>
  );
};
