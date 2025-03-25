import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './AgregarMateria.css';

function AgregarMateria() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevaMateria = { titulo, descripcion };
    const materiasGuardadas = JSON.parse(localStorage.getItem('materias')) || [];

    materiasGuardadas.push(nuevaMateria);
    localStorage.setItem('materias', JSON.stringify(materiasGuardadas));
    
    // Aquí iría la lógica para guardar la materia (en una base de datos o estado global)
    console.log('Materia agregada:', { titulo, descripcion });
    alert('Materia agregada con éxito ✅');
    navigate('/cards'); // Redirige a la página de cards
  };

  return (
    <div>
      <Navbar />
      <div className="agregar-materia-container">
        <h2>Agregar Nueva Materia</h2>
        <form onSubmit={handleSubmit} className="materia-form">
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label>Descripción / Grupo / Días:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="4"
            required
          />

          <button type="submit">Guardar Materia</button>
        </form>
      </div>
    </div>
  );
}

export default AgregarMateria;
