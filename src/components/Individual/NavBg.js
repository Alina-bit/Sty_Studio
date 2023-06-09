import React from "react";
import Navbar from "../Home/Navbar";
const NavBg = () => {
  return (
    <>
      <div className="bg-shade"></div>
      <div className="bg-blur-left"></div>
      <div className="bg-blur-right"></div>
      <div className="nav-bg">
        <Navbar />
      </div>
    </>
  );
};

export default NavBg;
