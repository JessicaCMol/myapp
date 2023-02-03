import React, { Component } from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

//Aqui llamamos a los componentes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Listado from './Components/Listado';
import Works from './Components/Works'
import Formulario from './Components/Formulario';
import Contador from './Components/Contador';
import Hooks from './Components/Hooks';
import ListadoApi from './Components/ListadoApi';
import Formulario2 from './Components/Formulario2';
import HookForm from './Components/HookForm';
import Empleados from './Components/Empleados';
import AcercaVLA from './Components/acercavla';

class Router extends Component {
    
    render() { 
        return (

            <BrowserRouter>
            
            <Navbar></Navbar>

            <Route exact path="/list" component={Listado}></Route>
            <Route exact path="/works" component={Works}></Route>
            <Route exact path="/form" component={Formulario}></Route>
            <Route exact path="/cont" component={Contador}></Route>
            <Route exact path="/hooks" component={Hooks}></Route>
            <Route exact path="/listapi" component={ListadoApi}></Route>
            <Route exact path="/form2" component={Formulario2}></Route>
            <Route exact path="/empleados" component={Empleados}></Route>
            <Route exact path="/acercavla" component={AcercaVLA}></Route>
            <Route exact path="/hookform" component={HookForm}></Route>
            <Route exact path="/" component={Home}></Route>
            
            <Footer></Footer>

            </BrowserRouter>

        );
    }
}
 
export default Router;




//<Route exact path="/*" component={Error}></Route>










