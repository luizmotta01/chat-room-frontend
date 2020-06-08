import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0px;
`;

export interface IAccessButtonProperties {
  label: string;
  onClick: () => void;
}

export const AccessButton: React.FC<IAccessButtonProperties> = (props) => {
  const { label, onClick } = props;

  return (
    <ButtonDiv>
      <Button
        variant="contained"
        style={{ width: "100%" }}
        color="secondary"
        onClick={onClick}>
        {label}
      </Button>
    </ButtonDiv>
  );
};
