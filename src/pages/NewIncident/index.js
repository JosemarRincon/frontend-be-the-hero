import React, {useState, useEffect } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e){
      e.preventDefault();
      const data = {
        title,
        description,
        value,
  
      };
      try {
  
        await api.post('/incidents', data, {
          headers: {
            Authorization: ongId,
            }
          });
        alert(`Cadastro realizado com sucesso`);
        history.push('/profile');
        
      } catch (error) {
        alert('Erro no cadatro, tente novamnete.');
      }
  }


  return ( 
    <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero"></img>
            <h1>Cadastro</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            
            <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
             Voltar para Home
          </Link>

          </section>

          <form>
            <input 
            placeholder="Titulo do caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <textarea  
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

            <input  placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
            
            />


            <button onClick={handleNewIncident} type="submit" className="button">
              Cadastrar

            </button>

          </form>

        </div>
      </div>
  )
}