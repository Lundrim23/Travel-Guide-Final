import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static" className={classes.nav}>
      <Box className={classes.box}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Autocomplete>
      </Box>
    </AppBar>
  );
};

export default Header;
