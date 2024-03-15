import { useEffect, useState } from "react";
import axios from "axios";
import  NavbarFooter from "../../layouts/NavbarFooter";
import UpcomingMovies from "../../components/UpcomingMovies";
import TopRatedMovies from "../../components/TopRatedMovies";
import TvSeries from "../../components/TvSeries";
import Movies from "../../components/Movie";
import Menbership from "../../components/Membership";

const Homepage = () => {
  return (
    <>
      <NavbarFooter>
        <UpcomingMovies/>
        <TvSeries></TvSeries>
        <TopRatedMovies></TopRatedMovies>
        <Movies></Movies>
        <Menbership></Menbership>
      </NavbarFooter>
    </>
  );
};

export default Homepage;
