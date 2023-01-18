import React, { Component } from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

//Aqui llamamos a los componentes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Listado from './Components/Listado';
import Works from './Components/Works'

class Router extends Component {
    
    render() { 
        return (

            <BrowserRouter>
            
            <Navbar></Navbar>

            <Route exact path="/" component={Home}></Route>
            <Route exact path="/list" component={Listado}></Route>
            <Route exact path="/works" component={Works}></Route>
           

            <Footer></Footer>

            </BrowserRouter>

        );
    }
}
 
export default Router;















