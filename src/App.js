import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Apidata from "./components/Apidata";
import PokeApi from "./components/PokeApi";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
<Router>
      <Navbar />
    <Routes>  
    <Route exact
            path="/"
            element={<News />}/>
     <Route exact
            path="/covid19"
            element={<Apidata />}/>
          <Route exact
            path="/apidata"
            element={<PokeApi />}/>
    </Routes>
    </Router>
      {/* <News /> */}
      {/* <Apidata />  */}
      {/* <PokeApi /> */}
    </>
  );
};
export default App;
