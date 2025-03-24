import React from 'react';
import './CardsPage.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function CardsPage() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/register'); // Navega a la página de registro
  };

  return (
    <div>
      <Navbar />
      <div className="cards-container">
        <div className="card" onClick={handleCardClick}>
          <h3>MODELOS Y SIMULACIÓN</h3>
          <p>GRUPO 2: LUNES - MIÉRCOLES</p>
        </div>
        <div className="card" onClick={handleCardClick}>
          <h3>MODELOS Y ARQUITECTURA DE COMPUTADORES</h3>
          <p>GRUPO 1: JUEVES</p>
        </div>
        <div className="card" onClick={handleCardClick}>
          <h3>CLOUD COMPUTING - AWS</h3>
          <p>GRUPO 2: MIÉRCOLES - VIERNES</p>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;