import React from "react";
import styled from "styled-components";
import { Checkbox, Typography } from "@material-ui/core";

const AgreementDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export interface IAgreementProperties {
  checked: boolean;
  onChange: () => void;
}

export const Agreement: React.FC<IAgreementProperties> = (props) => {
  const { checked, onChange } = props;
  return (
    <AgreementDiv>
      <Checkbox color="secondary" checked={checked} onChange={onChange} />
      <Typography variant="caption">
        I agree to the Motta Chat Room <AgreementLink text="Terms of Service" />{" "}
        and <AgreementLink text="Privacy Policy." />
      </Typography>
    </AgreementDiv>
  );
};

interface IAgreementLinkProperties {
  text: string;
}

const AgreementLink: React.FC<IAgreementLinkProperties> = (props) => {
  const { text } = props;
  return (
    <Typography variant="caption" component="a" href="/" color="secondary">
      {text}
    </Typography>
  );
};
