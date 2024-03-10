import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const MovieItemsLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full  relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MovieItemsLayout;
