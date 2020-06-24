import React from "react";
import styled from "styled-components";
import { SectionHeaderText } from "./SectionHeaderText";

export interface ISectionHeaderProperties {
  expand: boolean;
  text: string;
}

export const SectionHeaderDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
  :hover {
    background-color: #3d4b57;
    opacity: 0.2;
    cursor: pointer;
  }
`;

export const SectionHeader: React.FC<ISectionHeaderProperties> = (props) => {
  const { expand, text, children } = props;
  return (
    <SectionHeaderDiv>
      {expand && <SectionHeaderText text={text} />}
      {children}
    </SectionHeaderDiv>
  );
};
