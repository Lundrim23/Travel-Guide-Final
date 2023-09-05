import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
};
export default Layout;
