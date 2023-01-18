import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="#">My Portfolio</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">HOME <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/works">WORKS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/list">LINK</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}
 
export default Navbar;
