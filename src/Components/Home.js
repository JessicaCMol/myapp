import React, { Component } from 'react';
import axios from 'axios';
import Listado from './Listado';

class Home extends Component {




    state = {  } 
    render() { 
        return (
          
          
          <div>
          <div className='myname'>
            <h1 className='present'>Hey, I'm</h1>
            <hr/>
            <ul className='firstul'>
              <li><div className='letter'>J</div></li>
              <li><div className='letter'>E</div></li>
              <li><div className='letter'>S</div></li>
              <li><div className='letter'>S</div></li>
              <li><div className='letter'>I</div></li>
              <li><div className='letter'>C</div></li>
              <li><div className='letter'>A</div></li>

            </ul>
            <ul className='secondul'>
              <li><div className='letter'>C</div></li>
              <li><div className='letter'>O</div></li>
              <li><div className='letter'>N</div></li>
              <li><div className='letter'>E</div></li>
              <li><div className='letter'>J</div></li>
              <li><div className='letter'>O</div></li>

            </ul>
            <p className='puesto'>Front-End Developer</p>
          </div>
 

          </div>
          

          

        );
    }
}
 
export default Home;