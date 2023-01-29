/*

import React, { Component, Fragment, useEffect, useState } from 'react';

const ListadoApi = () => {

    const [respuesta, setrespuesta] = useState([])
    //Lo primero que se jecuta es el equivalente al On Init en Angular
    React.useEffect(() =>{

        console.warn("Componente en ejecución")

    },[]
    
    
    )

    //Functions

    const obtenerdatos = async () =>{
         const API = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await API.json()

        console.log(data)
        setrespuesta(data)


           // .then(data => data.json())
           // .then(data => {
           // console.log(data)
           // })
    }   

    return (
        <Fragment>
            <h2 className='led-display-4'>Resultado del Api</h2>

            <ul>
                {
                    respuesta.map(item =>{
                        <li key="item.id">{item.title}</li>
                    })
                }
            </ul>

        </Fragment>

      );
}
 
export default ListadoApi;

*/