import React from "react";
import styled from "styled-components";
import { AccessLogo } from "./AccessLogo";
import { AccessTitle } from "./AccessTitle";

const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #d16c00;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
`;

export interface IAccessContainerProperties {
  form: JSX.Element;
  formActions: JSX.Element;
}

export const AccessContainer: React.FC<IAccessContainerProperties> = (
  props
) => {
  const { form, formActions } = props;
  return (
    <LoginFormContainer>
      <AccessLogo />
      <AccessTitle />
      {form}
      {formActions}
    </LoginFormContainer>
  );
};
