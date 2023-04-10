import './App.css';
import Boton from './componentes/Boton';
import freCodeCamp from './imagenes/descarga.jfif';

function App() {

  const manejarClic = () =>{
    console.log('Clic');
  }

  const reiniciarContador = () =>{
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freCodeCamp}
          alt='logo de freCodeCamp' 
        />
        <div className='contenedor-principal'>
          <Boton 
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
          <Boton 
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
        </div>
      </div> 
    </div>
  );
}

export default App;
