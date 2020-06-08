import React from "react";
import styled from "styled-components";
import { ForgotPassword } from "./ForgotPassword";
import { Register } from "./Register";

const ActionsDiv = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  margin: 10px 0px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginFormActions: React.FC = () => {
  return (
    <ActionsDiv>
      <Register />
      <ForgotPassword />
    </ActionsDiv>
  );
};
