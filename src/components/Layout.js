import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import LogoSlider from "../components/LogoSlider";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <LogoSlider />
      <Footer />
    </div>
  );
};
export default Layout;
