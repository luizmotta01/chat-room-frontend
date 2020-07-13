import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { UserStatus } from "./UserStatus";
import { MenuAreas } from "./MenuAreas";
import { useSelector } from "../../../store/Store";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "auto",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: theme.palette.primary.dark,
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

export const Menu: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerState = () => {
    setOpen((prevState) => !prevState);
  };
  const username = useSelector(({ user }) => user?.username);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerState}
          edge="start"
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {username && (
        <UserStatus username={username} expand={open} onClick={() => {}} />
      )}
      <MenuAreas expand={open} />
    </Drawer>
  );
};
