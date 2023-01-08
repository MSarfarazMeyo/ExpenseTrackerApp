import React from "react";
import { useState, useEffect } from "react";
import Main from "../components/Main/index";
import Topbar from "./Main/Topbar";
import Details from "./Details";

const Home = () => {
 

  return (
    <>
      <Main />
      <Topbar />
      <Details />
    </>
  );
};

export default Home;
