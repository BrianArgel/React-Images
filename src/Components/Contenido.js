import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
const Contenido = ({pasarBusuqeda}) => {

    const [termino, setTermino] = useState('')
    const [guardarTermino, setGuardarTermino] = useState ([])
    const [error, guardarError] = useState(false)
   
    
    
    const buscar = e => {
        setTermino( e.target.value)
        
    }

    const busqueda = (e) => {
        e.preventDefault();
    


        //validaciones
        if(termino.length <= 0){
            guardarError(true); return
        }

        //paso la validacion
        guardarError(false);

        setGuardarTermino([...guardarTermino, termino])
        pasarBusuqeda(termino)
        
        //resetear Form
        setTermino('')
       

    }

    return (
        <Fragment >
         <div className="container">
             <h1 className="mt-3">Buscador de GIF</h1>
         <form
         onSubmit={busqueda}
         >
            <div className="form-group">
                <label
                 for="exampleInputEmail1"
                >Contendio a buscar</label>

                <input type="text" class="form-control" id="exampleInputEmail1" autocomplete="off"
                 placeholder=""
                 value= {termino}
                 onChange= {buscar}
                 />
                <small id="emailHelp" className="form-text text-muted">Giff a buscar: {termino}</small>

                {error ? <div className="alert alert-danger" role="alert">busqueda Erronea escribe algo</div> : null}
            </div>
            <input type="submit" className="buscar" value="Buscar" />
        </form>

        <div className="container-fluid mt-5 scroll">
            {guardarTermino.map(termin => (
                <a className="terminos ml-3" key={termin}>{termin} &times;</a>
            ))} 
                
        </div>

        

        </div>
      
        </Fragment>
    )
}

export default Contenido;