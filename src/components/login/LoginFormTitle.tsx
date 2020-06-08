import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const FormTitleDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LoginFormTitle: React.FC = () => {
  return (
    <FormTitleDiv>
      <Typography variant="h3" color="secondary">
        Motta
      </Typography>
      <Typography variant="h4" color="secondary">
        Chat Room
      </Typography>
    </FormTitleDiv>
  );
};
