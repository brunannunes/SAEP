import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css'


function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [msn, setMsn] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        username,
        email,
      });
      console.log('Usuário cadastrado:', response.data);
      setMsn('Cadastro concluído com sucesso!!!')
      setUsername('');
      setEmail('');
    } catch (error) {
      console.log("Username: ", username)
      console.log("Email: ", email)
      console.error('Erro ao cadastrar usuário:', error);
      setMsn('Erro ao cadastrar usuário.')
    }
  };

  return (
    <div className='containner'>
      <header className="header">
        <h1 className="title">Gerenciador de Tarefas</h1>
        <nav className="nav">
          <Link className="Link" to="#cadastro-usuarios">Cadastro de Usuários</Link>
          <Link className="Link" to="/cadastrar-tarefas">Cadastro de Tarefas</Link>
          <Link className="Link" to="/gerenciar-tarefas">Gerenciar Tarefas</Link>
        </nav>
      </header>

      <main className='principal'>
        
        <form className='formCadastro' onSubmit={handleSubmit}>
          <h2 style={{color: 'white', paddingBottom: '8px'}}>Cadastro de Usuários</h2>
          <div className='teste' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="username" style={{ flex: '1', marginRight: '10px', color:'white' }}>Nome:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ flex: '2', height: '3px', padding: 10, borderRadius: '7px',border: '1px solid #ccc', outline:'none' }}
            />
          </div>
          <div className='teste' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="email" style={{ flex: '1', marginRight: '10px', color:'white' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: '2', height: '3px', padding: 10, borderRadius: '7px',  border: '1px solid #ccc', outline: 'none'}}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" className="botao-cadastrar">Cadastrar</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{color:'white'}}>{msn}</p>
          </div>
        </form>
      </main>
    </div>
  );
}


export default Home;
