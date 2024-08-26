import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Logo from './componentes/Logo'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react';
import { evaluate, log } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const esOperador = val => {
    return isNaN(val) && val !== '.' && val !== '=';
  };  

  const agregarInput = val=> {
    if (
      !esOperador(val) || 
      (esOperador(val) && !esOperador(input[input.length - 1]))
    ) {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input))
    } else {
      alert("Ingresa valores para realizar los calculos")
    }
  };

  return (
    <div className="App">
      <Logo 
        src={freeCodeCampLogo}
        alt={'Logo de freeCodeCamp'}
      />
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
