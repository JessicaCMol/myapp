import React, { Component } from 'react';
import axios from 'axios';

class Listado extends Component {
    state = { 
        persons:  [],

     } 

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            const users = response.data;
            //console.log(users)
            this.setState({users});
        })

    }



    render() { 
        return (

            <div>

            
                <p>Componente Listado</p>
            <ul>
               {/*this.state.users.map(user => {data.name})*/}
            </ul>

            </div>
         
        );
    }
}
 
export default Listado;