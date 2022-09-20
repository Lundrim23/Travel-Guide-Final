import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    backgroundColor: "#f5f5f5",
  },
  search: {
    color: "#7F8992",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    height: "30px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50ch",
    [theme.breakpoints.up("md")]: { width: "80ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    flexDirection: "row",
  },
}));
