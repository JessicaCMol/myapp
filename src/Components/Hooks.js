/*

import React, {Fragment, useState } from 'react';

const Hooks = () => {

    const saludo = "Hola Mundo";
    const temperatura = 21;
    const [arraynumeros, setarraynumeros] = useState(1,2,3,4)

    const [numero, setnumero] = useState(6)

    //Funciones y Metodos
    const Insertar =() =>{
        setnumero(numero+1) //actualizo la variable numero
        console.log(numero)
        console.warn("Esta Funcionando el boton")
        //Llamo al setarray para modificarlo
        //Lllamar a la variable del array pero con 3 puntos antes (...)
        //Para hacer push se coloca (,) y la variable que quieren insertar en el array
        setarraynumeros([

            ...arraynumeros, numero
            
        ])
    }

    return ( 

        <Fragment>
        <p>Mi mensaje es : {saludo}</p>

        <h2>Hace frio o calor</h2>
        <p>{temperatura < 20? "Que calor!": "Que frio!"}</p>
        <button onclick={Insertar}>Agregar</button>

        <ul>
            {
                
            arraynumeros.map((item, index) =>(
                <li key={index}>{item}</li>
                ))
            }
        </ul>

        </Fragment>
     );
}
 
export default Hooks;

*/