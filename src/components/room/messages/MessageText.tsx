import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Message";
export interface IMessageTextProperties {
  text: string;
}
export const MessageText: React.FC<IMessageTextProperties> = (props) => {
  const classes = useStyles();
  const { text } = props;
  return (
    <Typography className={classes.text} variant="body2">
      <pre style={{ fontFamily: "inherit", margin: "0px" }}>{text}</pre>
    </Typography>
  );
};
