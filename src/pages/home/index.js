import { useEffect, useState } from "react";
import axios from "axios";
import  NavbarFooter from "../../layouts/NavbarFooter";
import UpcomingMovies from "../../layouts/upcomingMovies";
import TopRatedMovies from "../../components/TopRatedMovies";
import Menbership from "../../components/Membership";

const Homepage = () => {
  return (
    <>
      <NavbarFooter>
        <UpcomingMovies/>
        <TopRatedMovies></TopRatedMovies>
        <Menbership></Menbership>
      </NavbarFooter>
    </>
  );
};

export default Homepage;
