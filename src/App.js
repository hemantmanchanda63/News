import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";


const App = () => {
  return (
    <>
      <Navbar />
      <News />
    </>
  );
};
export default App;
