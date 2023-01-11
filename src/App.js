import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


//Importaciones de los componentes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Works from './Components/Works';


function App() {
  return (

      <div className="App">
      

      <Navbar></Navbar>
      <Home></Home>
      <Works></Works>
      <Footer></Footer>


      </div>

    

  );
}

export default App;



