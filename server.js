const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta al archivo JSON
const filePath = path.join(__dirname, 'public', 'data', 'students.json');

// Endpoint para obtener los estudiantes
app.get('/students', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint para agregar un estudiante
app.post('/students', (req, res) => {
  const newStudent = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }

    const students = JSON.parse(data);
    students.push(newStudent);

    fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
      }
      res.status(201).json({ message: 'Estudiante agregado correctamente' });
    });
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});