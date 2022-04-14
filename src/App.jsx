import './App.css';
import React from 'react';
import Fild from './Components/Fild';

function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [msg, setMsg] = React.useState(null);

  function handleCalc(e) {
    e.preventDefault();

    if (peso.length === 0 || altura.length === 0) {
      alert('Preencha os campos com os valores!');
      return;
    }
    
    const alt = altura / 100;
    const imc = peso / (alt * alt);


    if (imc < 18.5) {
      setMsg(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`);
    } else if (imc < 25) {
      setMsg(`Seu IMC é ${imc.toFixed(2)}. Você está com peso ideal`);
    } else if (imc < 30) {
      setMsg(`Seu IMC é ${imc.toFixed(2)}. Você está com excesso de peso`);
    } else {
      setMsg(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade`);
    }

  }

  return (
    <section className="imc-container">
      <h1>Calculadora de IMC</h1>
      <form action="">
        <Fild
          name="peso"
          type="number"
          placeholder="Digite seu peso em Kg"
          inputLabel="Peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <Fild
          name="altura"
          type="number"
          placeholder="Digite sua altura em cm"
          inputLabel="Altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <button className="btn" onClick={handleCalc}>
          Calcular IMC
        </button>
      </form>
      {msg && (
        <div className="msg">
          <p>{msg}</p>
        </div>
      )}
    </section>
  );
}

export default App;
