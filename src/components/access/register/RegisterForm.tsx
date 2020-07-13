import React, { useState } from "react";
import styled from "styled-components";
import { AccessInput } from "../common/AccessInput";
import { AccessButton } from "../common/AccessButton";
import { registration } from "../../../services/Services";
import { useHistory } from "react-router-dom";
import { notifySuccess, notifyError } from "../../notifications/Notifications";
import { IRegistrationRequest } from "../../../models/Models";
import { Agreement } from "./Agreement";

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

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const handleRegister = async (request: IRegistrationRequest) => {
    const response = await registration(request);
    if (response.statusCode === 201) {
      response.messages.forEach((message) => notifySuccess(message));
      history.push("/login");
    } else {
      response.messages.forEach((message) => notifyError(message));
    }
  };

  const handleAgreementCheck = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <FormContainer>
      <FormGroup>
        <AccessInput
          label="Email"
          type="email"
          onChange={(args) => setEmail(args.target.value)}
        />
        <AccessInput
          label="Username"
          type="text"
          onChange={(args) => setUsername(args.target.value)}
        />
        <AccessInput
          label="Password"
          type="password"
          onChange={(args) => setPassword(args.target.value)}
        />
        <Agreement checked={checked} onChange={handleAgreementCheck} />
        <AccessButton
          onClick={() =>
            handleRegister({ username, email, password, agreement: checked })
          }
          label="Register"
        />
      </FormGroup>
    </FormContainer>
  );
};
