import React, {useState} from 'react';
import './Main.css'
import api from '../services/api';

function Main(){
  const [numBinario, setNumBinario]= useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/', {
      numBinario,
    
    });
  
    const {resultado, Erro} = response.data
    setResultado(resultado);
    setErro(Erro);
    console.log(erro)
  }
  return (
    <aside>
      <strong>Conversor de Binario</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="">Numero em Binario</label>
          <input 
            type="text"
            required
            value={numBinario}
            onChange={e => setNumBinario(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="">Resultado (Decimal)</label>
            <input 
              type="text"
              name='resultadi'
              disabled
              value = {resultado}
              onChange={e => setResultado(e.target.value)}
              />
          </div>
        </div>
      
      <button type="submit">Converter</button>
      <dir className="input-erro">
        <label htmlFor="">{erro}</label>
      </dir>

      </form>
    </aside>
    
  );  
}

export default Main;