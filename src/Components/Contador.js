import React, {useState, Fragment } from 'react';


//React Hooks
//sfc (snnipet para contador)
const Contador = () => {

    const [numero, setnumero] = useState(0);

    const Aumentar = () => {
        console.log("Funcionando");
        setnumero(numero + 1)
    }

    return ( 
            <Fragment>
                 <p>Numero de clicks: {numero}</p>
                 <button onClick={Aumentar}>Dar Click</button>
            </Fragment>
           

     );
}
 
export default Contador ;