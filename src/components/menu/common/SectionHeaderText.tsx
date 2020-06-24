import React from "react";
import { Typography } from "@material-ui/core";

export interface ISectionHeaderText {
  text: string;
}
export const SectionHeaderText: React.FC<ISectionHeaderText> = (props) => {
  const { text } = props;
  return (
    <Typography variant="subtitle2" color="textSecondary">
      {text}
    </Typography>
  );
};
