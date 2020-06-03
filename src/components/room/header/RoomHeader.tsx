import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useSelector } from "../../../store/Store";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: "center",
      color: "#fff",
    },
  })
);

const RoomHeaderDiv = styled.div`
  width: 100%;
  height: 5%;
  background-color: #6340b2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`;

export const RoomHeader: React.FC = () => {
  const classes = useStyles();
  const roomTitle = useSelector(({ currentRoom }) => currentRoom.name);
  return (
    <RoomHeaderDiv>
      <Typography className={classes.text} variant="h6">
        {roomTitle}
      </Typography>
    </RoomHeaderDiv>
  );
};
