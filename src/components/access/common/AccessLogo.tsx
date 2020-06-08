import React from "react";
import styled from "styled-components";
import ForumIcon from "@material-ui/icons/Forum";

const LogoSvg = styled.svg`
  width: 100%;
  height: 100%;
`;
export const AccessLogo: React.FC = () => {
  return (
    <LogoSvg>
      <ForumIcon color="secondary" />
    </LogoSvg>
  );
};
