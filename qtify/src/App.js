import React, { useEffect, useState } from "react";
import Mainnavbar from "./Components/Navbar/Mainnavbar";
import { Outlet } from "react-router";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./Components/Api/Api";
import { StyledEngineProvider } from "@mui/styled-engine";

function App() {
  const [searchdata, useSearchdata] = useState("");
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };


  useEffect(()=>{
    generateData("topAlbums" , fetchTopAlbums);
    generateData("newAlbums" , fetchNewAlbums);
    generateData("songs" , fetchSongs);
  }, [])


  const {topAlbums=[] , newAlbums=[] , songs=[]}= data 

  return (
    <StyledEngineProvider injectFirst>
      <Mainnavbar searchdata={[...topAlbums , ...newAlbums]} />
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>
  );
}

export default App;
