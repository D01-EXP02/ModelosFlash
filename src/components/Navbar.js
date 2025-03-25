import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS para estilos

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Obtiene el nombre de usuario

  const handleLogout = () => {
    // Aquí puedes agregar lógica para cerrar sesión, como limpiar tokens
    localStorage.removeItem('username');
    navigate('/'); // Redirige a la página de login
  };

  return (
    <nav className="navbar">
      <div className="navbar-user">
        <i className="user-icon">👤</i> {/* Ícono de usuario */}
        <span className="username">{username || 'Invitado'}</span> {/* Si no encuentra username, muestra "Invitado" */}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Navbar;