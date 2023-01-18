import React, { Component } from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

//Aqui llamamos a los componentes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Listado from './Components/Listado';
import Works from './Components/Works'
import Formulario from './Components/Formulario';

class Router extends Component {
    
    render() { 
        return (

            <BrowserRouter>
            
            <Navbar></Navbar>

            <Route exact path="/list" component={Listado}></Route>
            <Route exact path="/works" component={Works}></Route>
            <Route exact path="/form" component={Formulario}></Route>
          
            <Route exact path="/" component={Home}></Route>
            
            <Footer></Footer>

            </BrowserRouter>

        );
    }
}
 
export default Router;




//<Route exact path="/*" component={Error}></Route>










