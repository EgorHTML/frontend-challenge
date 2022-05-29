import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react';
import NavBar from "./NavBar";
import "../style/main.css"
import Cats from "./Cats";

 

const App = () => {
  return ( <div>
      <NavBar/>
      <Cats/>
  </div> )
}

export default App   