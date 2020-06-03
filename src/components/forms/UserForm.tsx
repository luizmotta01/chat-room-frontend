import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useChatRoomContext } from "../../store/Store";
import { ActionType } from "../../actions/ActionTypes";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Guid } from "guid-typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    text: {
      textAlign: "center",
      color: "#fff",
    },
    textField: {
      width: "95%",
    },
    input: {
      color: "#fff",
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#6340B2",
      color: "#fff",
    },
  })
);

const UserFormDiv = styled.div`
  background-color: #6340b2;
  border: 4px solid #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 30%;
  width: 30%;
`;

export const UserForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { state, dispatch } = useChatRoomContext();
  const { user } = state;
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!user || !user.username) return;
    history.push("/chat");
  }, [user]);

  return (
    <UserFormDiv className={classes.root}>
      <Typography className={classes.text} variant="h6">
        Who are you?
      </Typography>
      <TextField
        className={classes.textField}
        variant="outlined"
        label="Username"
        required
        inputProps={{ className: classes.input }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={(e) => {
          if (!username) return;
          dispatch({
            type: ActionType.SetUser,
            payload: {
              id: Guid.create(),
              username,
            },
          });
        }}>
        Enter
      </Button>
    </UserFormDiv>
  );
};
