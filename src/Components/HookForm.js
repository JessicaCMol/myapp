import React,{useState,Fragment} from "react";
import { useForm } from 'react-hook-form'
//sfc
const HookForm = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();

    const [entradas,setentradas] = useState([])


    const onSubmit =(data) =>{
        console.log(data)
        alert("Funciona ");
        setentradas([
            ...entradas,data
        ])

        alert(JSON.stringify(entradas))
        Event.target.reset();

    }
    return (  
        <Fragment>
            <div className="hookform">
            <h2>Formulario Hooks</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                        name="nombre"
                        className="form-control"
                        placeholder="Ingresa tu nombre "   
                        //Validacion --register nombre
                        {...register("nombre",{

                            required:{value:true, message:"Este campo es requerido"}, 
                            minLength:{value:2, message:"El nombre tiene que ser mas largo"}
                        })}

                        />
                        

                        {
                            errors.nombre &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.nombre.message}
                            </div>
                        }

                        <input 
                        name="edad"
                        className="form-control"
                        placeholder="Ingresa tu edad "   
                        //Validacion --register nombre
                        {...register("edad",{

                            required:{value:true, message:"Este campo es requerido"}, 
                            minLength:{value:2, message:"El nombre tiene que ser mas largo"}
                        })}

                        />

                        {
                            errors.edad &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.edad.message}
                            </div>
                            }


                        <button type="submit" className="btn btn-primary" > Enviar </button>
                </form> 

                <ul>
                    {
                        entradas.map(item =>
                        <li>{item.nombre} - {item.edad}</li>
                        )
                    }
                </ul>
            </div>
            
                


        </Fragment>

    );
}
 
export default HookForm;
