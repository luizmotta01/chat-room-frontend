import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const SingUpDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SignIn: React.FC = () => {
  return (
    <SingUpDiv>
      <Typography
        variant="button"
        color="secondary"
        component="a"
        href="/login">
        Sign in!
      </Typography>
    </SingUpDiv>
  );
};
