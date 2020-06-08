import React from "react";
import styled from "styled-components";
import { ForgotPassword } from "../common/ForgotPassword";
import { SignIn } from "../login/SignIn";

const ActionsDiv = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  margin: 10px 0px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const RegisterFormActions: React.FC = () => {
  return (
    <ActionsDiv>
      <SignIn />
      <ForgotPassword />
    </ActionsDiv>
  );
};
