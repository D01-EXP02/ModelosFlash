import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addstudent.css';

function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    estudiante: '',
    trabajos: '',
    quiz: '',
    primerCorte: '',
    segundoCorte: '',
    tercerCorte: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          trabajos: parseFloat(formData.trabajos),
          quiz: parseFloat(formData.quiz),
          primerCorte: parseFloat(formData.primerCorte),
          segundoCorte: parseFloat(formData.segundoCorte),
          tercerCorte: parseFloat(formData.tercerCorte),
        }),
      });

      if (response.ok) {
        alert('Estudiante agregado correctamente'); // Muestra un aviso
        navigate('/register'); // Redirige a la página de Register
      } else {
        alert('Error al agregar el estudiante');
      }
    } catch (error) {
      console.error('Error al agregar el estudiante:', error);
      alert('Error al agregar el estudiante');
    }
  };

  return (
    <div className="add-student-container">
      <h1>Agregar Estudiante</h1>
      {/* Botón para retroceder a la página de Register */}
      <button className="back-button" onClick={() => navigate('/register')}>
        Volver a Registro
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="estudiante"
          placeholder="Nombre del estudiante"
          value={formData.estudiante}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="trabajos"
          placeholder="Trabajos"
          value={formData.trabajos}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quiz"
          placeholder="Quiz"
          value={formData.quiz}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="primerCorte"
          placeholder="Primer Corte"
          value={formData.primerCorte}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="segundoCorte"
          placeholder="Segundo Corte"
          value={formData.segundoCorte}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="tercerCorte"
          placeholder="Tercer Corte"
          value={formData.tercerCorte}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Estudiante</button>
      </form>
    </div>
  );
}

export default AddStudent;