import React from "react";
import { Typography } from "@material-ui/core";

export interface IMenuItemTextProperties {
  text: string;
}

export const MenuItemText: React.FC<IMenuItemTextProperties> = (props) => {
  const { text } = props;
  return (
    <Typography
      variant="subtitle2"
      color="textPrimary"
      style={{ textAnchor: "end" }}>
      {text}
    </Typography>
  );
};
