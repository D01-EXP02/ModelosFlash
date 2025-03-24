import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Importa el archivo CSS
import titulo from '../image/titulo.png'; // Importa la imagen


function LoginPage() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario
    navigate('/cards'); // Navega a la página de tarjetas
  };

  return (
    <div className="login-container">
    <div className="login-box">
    <img src={titulo} alt="Título de la página" className="login-logo" />
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  </div>
  );
}

export default LoginPage;