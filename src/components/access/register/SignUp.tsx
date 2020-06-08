import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const RegisterDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SignUp: React.FC = () => {
  return (
    <RegisterDiv>
      <Typography
        variant="button"
        color="secondary"
        component="a"
        href="/register">
        Sign up!
      </Typography>
    </RegisterDiv>
  );
};
