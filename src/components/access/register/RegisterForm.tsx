import React, { useState } from "react";
import styled from "styled-components";
import { AccessInput } from "../common/AccessInput";
import { AccessButton } from "../common/AccessButton";
import { registration } from "../../../services/Services";
import { useHistory } from "react-router-dom";
import { notifySuccess } from "../../notifications/Notifications";
import { IUserModel } from "../../../models/Models";

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

  const history = useHistory();

  const handleRegister = async (userModel: IUserModel) => {
    const response = await registration(userModel);
    if (response.statusCode === 201) {
      notifySuccess(`${userModel.username} registerd at Motta Chat Room!`);
      history.push("/login");
    }
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
        <AccessButton
          onClick={() => handleRegister({ username, email, password })}
          label="Register"
        />
      </FormGroup>
    </FormContainer>
  );
};
