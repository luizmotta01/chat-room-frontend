import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { MenuItemText } from "./MenuItemText";
import { ContactIcon } from "../icons/ContactIcon";

export interface IContactsMenuItemProperties {
  expand: boolean;
}

const ContactsMenuItemDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  :hover {
    background-color: #3d4b57;
    cursor: pointer;
  }
`;

export const ContactsMenuItem: React.FC<IContactsMenuItemProperties> = (
  props
) => {
  const { expand } = props;
  return (
    <ContactsMenuItemDiv>
      <Grid
        container
        spacing={0}
        direction="row"
        justify={expand ? "space-around" : "center"}
        alignItems="center">
        <Grid item xs={expand ? 1 : 3}>
          <ContactIcon />
        </Grid>
        <Grid item xs={expand ? 3 : 1}>
          {expand && <MenuItemText text={"Contacts"} />}
        </Grid>
      </Grid>
    </ContactsMenuItemDiv>
  );
};
