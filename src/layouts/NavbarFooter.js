import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import React from "react";

const NavbarFooter = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full  relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
          <Banner/>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default NavbarFooter;
