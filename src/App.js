import './App.css';
import freCodeCamp from './imagenes/descarga.jfif';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freCodeCamp}
          alt='logo de freCodeCamp' 
        />
        <div className='contenedor-principal'>
          
        </div>
      </div> 
    </div>
  );
}

export default App;
