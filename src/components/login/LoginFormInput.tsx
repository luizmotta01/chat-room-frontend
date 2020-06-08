import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export interface ILoginFormInputProperties {
  label: string;
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

export const LoginFormInput: React.FC<ILoginFormInputProperties> = (props) => {
  const { label, onChange } = props;
  const classes = useStyles();
  return (
    <TextField
      label={label}
      fullWidth
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
