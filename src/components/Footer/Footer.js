import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Styles from "./Footer.module.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    //returns the footer as designed with css properties of class root.
    <div className={Styles.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} align="center">
          <CopyrightIcon
            edge="start"
            className={classes.menuButton}
            style={{ fontSize: "large" }}
            color="inherit"
            aria-label="menu"
            position="centre"
          />
          {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.thecocktaildb.com/api.php">
            {" "}
            TheCocktailDB{" "}
          </a>
        </Typography>
      </Toolbar>
    </div>
  );
}
