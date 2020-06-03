import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
    h6: {
      fontWeight: 300,
    },
  },
});

export const DefaultTheme: React.FC = ({ children }): JSX.Element => (
  <ThemeProvider theme={defaultTheme} children={children} />
);
