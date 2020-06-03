import React from "react";
import styled from "styled-components";
import { IMessage, IUser } from "../../store/State";
import { useSelector } from "../../store/Store";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      margin: theme.spacing(1),
      textAlign: "left",
      color: "#000",
      overflow: "ellipsis",
    },
  })
);

const RoomMessageDiv = styled.div`
  border-radius: 10px;
  background-color: #d9ccc1;
  width: 350px;
  margin: 10px 10px 5px 0px;
  position: relative;
`;
const SenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageDiv = styled.div``;

export interface IRoomMessageProperies {
  message: IMessage;
}

export const RoomMessage: React.FC<IRoomMessageProperies> = (props) => {
  const classes = useStyles();

  const user = useSelector(({ user }) => user);
  const { message } = props;
  const { from, sent, text } = message;
  const style = getStyle(from, user);
  console.log(style.left);
  return (
    <RoomMessageDiv style={style}>
      <SenderDiv>
        <Typography className={classes.text} variant="caption">
          {from.username}
        </Typography>
        <Typography className={classes.text} variant="caption">
          {sent.toLocaleTimeString()}
        </Typography>
      </SenderDiv>
      <Typography className={classes.text} variant="body2">
        <pre style={{ fontFamily: "inherit" }}>{text}</pre>
      </Typography>
    </RoomMessageDiv>
  );
};

const getStyle = (from: IUser, user: IUser): React.CSSProperties => {
  return {
    left: from.id === user.id ? "calc(100% - 360px)" : "10px",
  };
};
