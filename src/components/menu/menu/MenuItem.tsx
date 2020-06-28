import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { MenuItemText } from "./MenuItemText";

export interface IMenuItemProperties {
  expand: boolean;
  text: string;
}

const MenuItemDiv = styled.div`
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

export const MenuItem: React.FC<IMenuItemProperties> = (props) => {
  const { expand, text, children } = props;
  return (
    <MenuItemDiv>
      <Grid
        container
        spacing={0}
        direction="row"
        justify={expand ? "space-around" : "center"}
        alignItems="center">
        <Grid item xs={expand ? 1 : 3}>
          {children}
        </Grid>
        <Grid item xs={expand ? 3 : 1} justify="flex-start">
          {expand && <MenuItemText text={text} />}
        </Grid>
      </Grid>
    </MenuItemDiv>
  );
};
