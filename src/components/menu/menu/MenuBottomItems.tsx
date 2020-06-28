import React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { AppSettingsIcon } from "../icons/AppSettingsIcon";
import { LogoutIcon } from "../icons/LogoutIcon";

const MenuBottomItemsDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
`;

export interface IMenuBottomItemsProperties {
  expand: boolean;
}

export const MenuBottomItems: React.FC<IMenuBottomItemsProperties> = (
  props
) => {
  const { expand } = props;
  return (
    <MenuBottomItemsDiv>
      <MenuItem
        text={"Settings"}
        expand={expand}
        children={<AppSettingsIcon />}
      />
      <MenuItem text={"Logout"} expand={expand} children={<LogoutIcon />} />
    </MenuBottomItemsDiv>
  );
};
