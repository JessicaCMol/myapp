import React, {Component} from 'react';
import axios from 'axios'

class Empleados extends Component {
    state = { 

        empleados: [],

     }
    
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            const empleados = response.data;
            console.log(empleados)
            this.setState({empleados})
        
        })

    }


    render() { 
        return (
            <div className='container-empleados'>
                <table class="table table-bordered">
                    <thead className="thead">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">N° teléfono</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="col">ID</th>
                        {this.state.empleados.map(data => 

                            <td>{data.id}</td>

                            )}
                        
                        </tr>
                        <tr>
                        <th scope="col">Nombre</th>
                       
                        </tr>
                        <tr>
                        <th scope="col">N° Teléfono</th>
                        
                        </tr>
                        <tr>
                        <th scope="col">Email</th>
                        
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }           
}
 
export default Empleados;



/**/