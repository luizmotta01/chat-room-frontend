import React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { ContactIcon } from "../icons/ContactsIcon";
import { AddContactIcon } from "../icons/AddContactIcon";
import { GroupsIcon } from "../icons/GroupsIcon";

const MenuTopItemsDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
`;

export interface IMenuTopItemsProperties {
  expand: boolean;
}

export const MenuTopItems: React.FC<IMenuTopItemsProperties> = (props) => {
  const { expand } = props;
  return (
    <MenuTopItemsDiv>
      <MenuItem text={"Contacts"} expand={expand} children={<ContactIcon />} />
      <MenuItem text={"Groups"} expand={expand} children={<GroupsIcon />} />
    </MenuTopItemsDiv>
  );
};
