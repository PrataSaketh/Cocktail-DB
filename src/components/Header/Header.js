import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* using appbar from @material-ui/core for header */}
      <AppBar position="static" style={{ backgroundColor: "#B94629" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            The Cocktail DB
          </Typography>
          <Typography>Hi Saketh!</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
