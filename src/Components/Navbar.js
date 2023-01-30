import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
          <div class="container-fluid h-25">
            <nav className="navbar fixed-top navbar-expand-sm" >
          <NavLink className="navbar-brand" to="/">
          <img src="https://s3.amazonaws.com/vla.academy/wp-content/uploads/2020/08/13160600/vlamerica-logo.png" alt="logo-vla"></img>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse h-25" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/works">CURSOS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/acercavla">ACERCA DE VLA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/empleados">EMPLEADOS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/listapi">LISTADOAPI</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/form2">FORM2</NavLink>
              </li>
            </ul>
          </div>
        </nav>
          </div>
        );
    }
}
 
export default Navbar;


/*              <li className="nav-item">
                <NavLink className="nav-link" to="/cont">CONTADOR</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hooks">HOOKS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/listapi">LISTADO API</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/form2">FORMULARIO 2</NavLink>
              </li>

*/