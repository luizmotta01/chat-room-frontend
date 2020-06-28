import React from "react";
import styled from "styled-components";
import { MenuTopItems } from "./MenuTopItems";
import { MenuBottomItems } from "./MenuBottomItems";

interface IMenuAreasProperties {
  expand: boolean;
}

const MenuAreasDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MenuAreas: React.FC<IMenuAreasProperties> = (props) => {
  const { expand } = props;
  return (
    <MenuAreasDiv>
      <MenuTopItems expand={expand} />
      <MenuBottomItems expand={expand} />
    </MenuAreasDiv>
  );
};
