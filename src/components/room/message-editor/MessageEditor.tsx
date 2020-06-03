import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useChatRoomContext } from "../../../store/Store";
import { ActionType } from "../../../actions/ActionTypes";
import { IMessage, IRoom } from "../../../store/State";
import { SendButton } from "./SendButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      backgroundColor: "#fff",
      borderRadius: 10,
      margin: theme.spacing(1),
      width: "90%",
      fontFamily: "Rubik",
    },
    input: {
      color: "#000",
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#382465",
      color: "#fff",
      height: "60%",
    },
  })
);

const EditorDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #6340b2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TextEditor: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useChatRoomContext();
  const [message, setMessage] = useState("");
  const { currentRoom, user } = state;

  const dispatchMessage = (message: IMessage, room: IRoom) => {
    dispatch({
      type: ActionType.AppendMessageToRoom,
      payload: { message, room },
    });
    setMessage("");
  };

  return (
    <EditorDiv>
      <TextField
        className={classes.textField}
        multiline
        variant="outlined"
        rowsMax={2}
        rows={2}
        value={message}
        inputProps={{ className: classes.input }}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={() => {}}
      />
      <SendButton
        onClick={() =>
          dispatchMessage(
            { from: user, sent: new Date(), text: message },
            currentRoom
          )
        }
      />
    </EditorDiv>
  );
};
