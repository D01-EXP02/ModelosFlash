import React, { useState, useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/students'); // Cambia la ruta al servidor
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const students = await response.json();
        setData(students);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    // Crea una hoja de cálculo a partir de los datos
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');

    // Genera el archivo Excel
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Guarda el archivo usando FileSaver
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'RegistroEstudiantes.xlsx');
  };

  return (
    <div className="register-container">
      <button className="back-button" onClick={() => navigate('/cards')}>
        RETROCEDER
      </button>
      <h1>Registro de Notas</h1>
      <button className="add-student-button" onClick={() => navigate('/add-student')}>
        AGREGAR ESTUDIANTE
      </button>
      <button className="export-button" onClick={exportToExcel}>
        Exportar a Excel
      </button>
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