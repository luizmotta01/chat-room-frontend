import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
    h6: {
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      light: "#EBF2EF",
      main: "#343b4a",
      dark: "#343b4a",
      contrastText: "#fff",
    },
    secondary: {
      light: "##D19901",
      main: "#d16c00",
      dark: "#d16c00",
      contrastText: "#000",
    },
  },
});

export const DefaultTheme: React.FC = ({ children }): JSX.Element => (
  <ThemeProvider theme={defaultTheme} children={children} />
);
