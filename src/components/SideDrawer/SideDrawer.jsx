import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import SearchBar from "../SearchBar/SearchBar";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col items-center">
        <ListItem disablePadding className=" border-b-4 border-red-500 p-2">
          <img src="/Mainlogo.png" className="w-36 mx-3  mb-2" />
        </ListItem>

        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon className="text-red-500" />
            </ListItemIcon>
            <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-red-500 ">
              Home
            </p>
            {/* <ListItemText primary="Home" /> */}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon className="text-red-500" />
            </ListItemIcon>
            <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-red-500 ">
              About Us
            </p>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon className="text-red-500" />
            </ListItemIcon>
            <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-red-500 ">
              Contact Us
            </p>
          </ListItemButton>
        </ListItem>
        <SearchBar />
      </List>
    </Box>
  );

  return (
    <div className="relative">
      <div className="fixed top-5  right-5">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon fontSize="large" className="text-black" />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
