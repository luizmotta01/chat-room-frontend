import React from "react";
import styled from "styled-components";
import { ContactsMenuItem } from "./ContactsMenuItem";
import { GroupsMenuItem } from "./GroupsMenuItem";
import { useSelector } from "../../../store/Store";
import { Grid } from "@material-ui/core";
import { Guid } from "guid-typescript";
import { UserStatus } from "./UserStatus";

const MenuTopItemsDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
`;

interface IMenuTopItemsProperties {
  expand: boolean;
}

export const MenuTopItems: React.FC<IMenuTopItemsProperties> = (props) => {
  const { expand } = props;
  return (
    <MenuTopItemsDiv>
      <ContactsMenuItem expand={expand} />
      <ContactsList expand={expand} />
      <GroupsMenuItem expand={expand} />
    </MenuTopItemsDiv>
  );
};

const ContactsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;

interface IContactsListProperties {
  expand: boolean;
}

export const ContactsList: React.FC<IContactsListProperties> = (props) => {
  const { expand } = props;
  const contacts = useSelector(({ contacts }) => contacts);
  return (
    <ContactsListDiv>
      <Grid container spacing={0} direction="column">
        {expand &&
          contacts &&
          contacts.map((contact) => (
            <Grid key={Guid.create().toString()} item>
              <UserStatus
                username={contact.username}
                expand={expand}
                onClick={() => {}}
              />
            </Grid>
          ))}
      </Grid>
    </ContactsListDiv>
  );
};
