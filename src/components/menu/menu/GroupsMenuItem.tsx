import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { MenuItemText } from "./MenuItemText";
import { GroupsIcon } from "../icons/GroupsIcon";

export interface IGroupsMenuItemProperties {
  expand: boolean;
}

const GroupsMenuItemDiv = styled.div`
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

export const GroupsMenuItem: React.FC<IGroupsMenuItemProperties> = (props) => {
  const { expand } = props;

  return (
    <GroupsMenuItemDiv>
      <Grid
        container
        spacing={0}
        direction="row"
        justify={expand ? "space-around" : "center"}
        alignItems="center">
        <Grid item xs={expand ? 1 : 3}>
          <GroupsIcon />
        </Grid>
        <Grid item xs={expand ? 3 : 1}>
          {expand && <MenuItemText text={"Groups"} />}
        </Grid>
      </Grid>
    </GroupsMenuItemDiv>
  );
};
