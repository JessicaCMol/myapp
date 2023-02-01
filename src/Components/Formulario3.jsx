import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, {useState, Fragment } from "react";
import {useForm } from 'react-hook-form'


const Formulario3 = () => {


const {register, formState:{errors}, handleSubmit} =useForm;

const [entradas, setentradas] = useState([])


const onSubmit = (data) => {

    console.log(data)
    alert("Funcionando")
    setSelectionRange([
        ...entradas, data
    ])

}


    return ( 
        <Fragment>

       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" 
        className="form-control"
        name="nombre" 
        placeholder="Ingresa tu nombre:" >

        

        </input>

        <button type="submit" className="btn btn-primary">Enviar</button>
        </form> 

        </Fragment>

     );
}
 
export default Formulario3;

