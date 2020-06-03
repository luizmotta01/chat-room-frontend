import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#382465",
      color: "#fff",
      height: "60%",
    },
  })
);

export interface ISendButtonProperties {
  onClick: () => void;
}

export const SendButton: React.FC<ISendButtonProperties> = (props) => {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="large"
      className={classes.button}
      endIcon={<SendIcon />}
      onClick={() => onClick()}>
      Send
    </Button>
  );
};
