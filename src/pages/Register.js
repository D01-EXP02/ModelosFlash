import React from 'react';
import './Register.css'; // Archivo CSS para estilos
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


function Register() {
    const navigate = useNavigate();
  const data = [
    { estudiante: 'Juan Pérez', trabajos: 90, quiz: 85, primerCorte: 88, segundoCorte: 92, tercerCorte: 87 },
    { estudiante: 'María López', trabajos: 95, quiz: 80, primerCorte: 90, segundoCorte: 85, tercerCorte: 88 },
    { estudiante: 'Carlos García', trabajos: 85, quiz: 75, primerCorte: 80, segundoCorte: 78, tercerCorte: 82 },
  ];

  const handleEditNotes = () => {
    alert('Editar notas');
  };

  const handleAddStudent = () => {
    alert('Agregar estudiante');
  };

  const handleDeleteStudent = () => {
    alert('Eliminar estudiante');
  };

  return (
    <div className="register-container">

      <button className="back-button" onClick={() => navigate('/cards')}>
        RETROCEDER
      </button>
      <h1>Registro de Notas</h1>

      <div className="table-actions">
        <button className="action-button" onClick={handleEditNotes}>
          EDITAR NOTAS
        </button>
        <button className="action-button" onClick={handleAddStudent}>
          AGREGAR ESTUDIANTE
        </button>
        <button className="action-button" onClick={handleDeleteStudent}>
          ELIMINAR ESTUDIANTE
        </button>
      </div>
      
      <table className="register-table">
        <thead>
          <tr>
            <th>ESTUDIANTES</th>
            <th>TRABAJOS</th>
            <th>QUIZ</th>
            <th>PRIMER CORTE</th>
            <th>SEGUNDO CORTE</th>
            <th>TERCER CORTE</th>
            <th>PROMEDIO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const promedio = (
              (row.trabajos + row.quiz + row.primerCorte + row.segundoCorte + row.tercerCorte) /
              5
            ).toFixed(2);
            return (
              <tr key={index}>
                <td>{row.estudiante}</td>
                <td>{row.trabajos}</td>
                <td>{row.quiz}</td>
                <td>{row.primerCorte}</td>
                <td>{row.segundoCorte}</td>
                <td>{row.tercerCorte}</td>
                <td>{promedio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Register;