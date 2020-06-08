import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export interface IAccessFormInputProperties {
  label: string;
  type: "text" | "email" | "password";
  onChange: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.white,
    },
  })
);

export const AccessInput: React.FC<IAccessFormInputProperties> = (props) => {
  const { label, type, onChange } = props;
  const classes = useStyles();
  return (
    <TextField
      label={label}
      fullWidth
      type={type}
      variant="filled"
      margin="normal"
      color="secondary"
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        className: classes.input,
      }}
    />
  );
};
