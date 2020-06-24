import React from "react";
import styled from "styled-components";
import { AvatarWithStatus } from "../avatars/AvatarWithStatus";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useSelector } from "../../../store/Store";

export interface IUserStatusProperties {
  open: boolean;
  onClick: () => void;
}

const UserStatusDiv = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 0px;
`;

export const UserStatus: React.FC<IUserStatusProperties> = (props) => {
  const { open, onClick } = props;
  const username = useSelector(({ user }) => user?.username);

  return (
    <List>
      <ListItem onClick={onClick}>
        <ListItemIcon>
          <AvatarWithStatus text={"M"} />
        </ListItemIcon>
        {open && <ListItemText primary={username} />}
      </ListItem>
    </List>
  );
};
