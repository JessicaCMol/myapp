
import React, { useState, Fragment } from 'react';

const Formulario2 = () => {

    const [datos, setdatos] = useState({
        nombre:"",
        apellido:""
        })

    const refrescar = (Event) = () =>{

        setdatos({
            ...datos,
            [Event.target.name]: Event.target.value
        })

    }
    const enviardatos =(Event) =>{
        Event.preventDefault()
        alert("Insertado" + datos.nombre + datos.apellido)
    }



    return ( 
        <Fragment>

        <h2>FORMULARIO</h1>
        <form className='row mt-5' onSubmit={enviardatos}>
            <div className='col-md-3'>
                <input type="text" placeholder='Nombre' className='form-control' name='nombre' onChange={refrescar}></input>
            </div>
            <div className='col-md-3'>
                <input type="text" placeholder='Apellido' className='form-control' name='apellido' onChange={refrescar}></input>
            </div>
            <button type='submit' className='btn btn-primary'></button>
        </form>

        <ul>
            <li>{datos.nombre} {datos.apellido}</li>
        </ul>

        </Fragment>
     );
}
 
export default Formulario2;

