import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

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
  return (
    <EditorDiv>
      <TextField
        className={classes.textField}
        multiline
        variant="outlined"
        rowsMax={2}
        rows={2}
        inputProps={{ className: classes.input }}
        onKeyPress={(e) => console.log(e.key)}
      />
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        endIcon={<SendIcon />}>
        Send
      </Button>
    </EditorDiv>
  );
};
