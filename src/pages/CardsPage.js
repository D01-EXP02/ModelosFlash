import React, { useEffect, useState } from 'react';
import './CardsPage.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function CardsPage() {
  const navigate = useNavigate();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const materiasGuardadas = JSON.parse(localStorage.getItem('materias')) || [];
    setMaterias(materiasGuardadas);
  }, []);


  const handleCardClick = () => {
    navigate('/register'); // Navega a la página de registro
  };


  const handleAddSubject = () => {
    navigate('/agregar-materia');
  };

  return (
    <div>
      <Navbar />
      <div className="add-subject-container">
        <button className="add-subject-button" onClick={handleAddSubject}>
          Agregar materia
        </button>
      </div>
      <div className="cards-container">

      {materias.map((materia, index) => (
          <div className="card" key={index}>
            <h3>{materia.titulo}</h3>
            <p>{materia.descripcion}</p>
          </div>
        ))}

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