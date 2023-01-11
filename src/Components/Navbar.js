import React, {Component} from "react";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">WORKS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT ME</a>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}
 
export default Navbar;
