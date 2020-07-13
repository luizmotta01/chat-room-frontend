import React from "react";
import styled from "styled-components";
import { AvatarWithStatus } from "../avatar/AvatarWithStatus";
import { Typography, Grid } from "@material-ui/core";

export interface IUserStatusProperties {
  username: string;
  expand: boolean;
  onClick: () => void;
}

const UserStatusDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

export const UserStatus: React.FC<IUserStatusProperties> = (props) => {
  const { username, expand } = props;
  return (
    <UserStatusDiv>
      <Grid
        container
        spacing={0}
        direction="row"
        justify={expand ? "space-around" : "center"}
        alignItems="center">
        <Grid item xs={expand ? 1 : 3}>
          <AvatarWithStatus text={"M"} />
        </Grid>
        <Grid item xs={expand ? 3 : 1}>
          {expand && <Typography>{username}</Typography>}
        </Grid>
      </Grid>
    </UserStatusDiv>
  );
};
