import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./SectionHeader";
import { ContactIcon } from "../contacts/ContactsIcon";
import { AddContactIcon } from "../contacts/AddContactIcon";
import { GroupsIcon } from "../groups/SectionIcon";

const MenuActionsDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
`;

export interface IMenuActionsProperties {
  expand: boolean;
}

export const MenuActions: React.FC<IMenuActionsProperties> = (props) => {
  const { expand } = props;
  return (
    <MenuActionsDiv>
      <SectionHeader
        text={"Contacts"}
        expand={expand}
        children={<ContactIcon />}
      />

      <SectionHeader
        text={"Groups"}
        expand={expand}
        children={<GroupsIcon />}
      />
    </MenuActionsDiv>
  );
};
