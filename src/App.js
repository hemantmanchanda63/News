import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Apidata from "./components/Apidata";


const App = () => {
  return (
    <>
      <Navbar />
      {/* <News /> */}
      <Apidata /> 
    </>
  );
};
export default App;
