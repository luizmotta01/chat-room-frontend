import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const ForgotPasswordDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ForgotPassword: React.FC = () => {
  return (
    <ForgotPasswordDiv>
      <Typography variant="caption" color="secondary" component="a" href="/">
        Forgot your password?
      </Typography>
    </ForgotPasswordDiv>
  );
};
