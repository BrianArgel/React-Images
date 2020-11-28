import React, { useState, useEffect } from 'react';
import Contenido from '../src/Components/Contenido';
import Card from '../src/Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../src/Components/Loading';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  const [buscar, setBuscar] = useState('')
  const [busqueda, guardarBusqueda] = useState([])

  const pasarBusuqeda = (busqueda) => {
    setBuscar(busqueda)
  }

  useEffect(() => {
    const key = 'gX5WJM9liXiF4Yczj3ORzNTLm2M5pjVI&';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}q=${buscar}&limit=7&offset=0&rating=g&lang=eS`
    console.log(url)

    if(buscar === '') return;
    console.log("ejecutandose")
    
    setTimeout(() => {
      setLoading(false)
      consultar()
    }, 5000);
 
   


    const consultar = async() => {
      const request = await fetch(url);
      const response = await request.json();
      guardarBusqueda(response.data)
    }

    setLoading(true)

   

  }, [buscar])

  return (
    <div className="App">
     <Contenido 
     pasarBusuqeda= {pasarBusuqeda}
     />
     <div className="container">
      <div className="row">
        {loading ? (
          <Loading />
        ) : (

          
          <div className="container">
             {busqueda.length <= 0 ? <h2 className="text-center">No hay Busquedas {buscar}</h2> : null}
            <div className="row">
        
        {busqueda.map(busque => (
        <div className="col-md-4">
       <Card 
       busque= {busque}
       />
       </div>
       
       
         ))}
        </div>
        </div>
        )}
        
       
        </div>
      </div>
    
     </div>
    
   
  );
}

export default App;
