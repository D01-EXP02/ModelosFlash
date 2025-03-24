import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS para estilos

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar lógica para cerrar sesión, como limpiar tokens
    navigate('/'); // Redirige a la página de login
  };

  return (
    <nav className="navbar">
      <div className="navbar-user">
        <i className="user-icon">👤</i> {/* Ícono de usuario */}
        <span className="username">DANIER</span>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Navbar;