"use client";
import { useMediaQuery } from "react-responsive";
import SideDrawer from "../SideDrawer/SideDrawer";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? <SideDrawer /> : <Navbar />;
};

export default Header;
