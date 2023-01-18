import React, { Component } from 'react';
import axios from 'axios';

class Listado extends Component {
    state = { 
        persons:  [],

     } 

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            const persons = response.data;
            console.log(persons)
            this.setState({persons});
        })

    }



    render() { 
        return (

            //Expresiones Lamba
            <div>
                <p>Componente Listado</p>
            <ul>
                
               {this.state.persons.map(data => data.name)};
               
                <hr/>

               {this.state.persons.map(data => 

                <li>{data.name}</li>

                )}
            </ul>

            </div>
         
        );
    }
}
 
export default Listado;