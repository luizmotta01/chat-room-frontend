import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0px;
`;

export interface ILoginButtonProperties {
  onClick: () => void;
}

export const LoginButton: React.FC<ILoginButtonProperties> = (props) => {
  const { onClick } = props;

  return (
    <ButtonDiv>
      <Button
        variant="contained"
        style={{ width: "100%" }}
        color="secondary"
        onClick={onClick}>
        Login
      </Button>
    </ButtonDiv>
  );
};
