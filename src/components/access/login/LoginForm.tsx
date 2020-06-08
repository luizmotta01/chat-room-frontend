import React, { useState } from "react";
import styled from "styled-components";
import { AccessInput } from "../common/AccessInput";
import { AccessButton } from "../common/AccessButton";
import { login } from "../../../services/Services";
import { useHistory } from "react-router-dom";
import { useChatRoomContext } from "../../../store/Store";
import { ActionType } from "../../../actions/ActionTypes";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { dispatch } = useChatRoomContext();
  return (
    <FormContainer>
      <FormGroup>
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
          onClick={async () => {
            const response = await login({ username, password });
            if (response.jwtToken) {
              dispatch({
                type: ActionType.SetAuthenticatedUser,
                payload: response,
              });
              history.push("/home");
            }
          }}
          label="Login"
        />
      </FormGroup>
    </FormContainer>
  );
};
