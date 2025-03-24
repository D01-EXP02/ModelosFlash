import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage'; // Asegúrate de que esta ruta sea correcta
import CardsPage from './pages/CardsPage'; // Asegúrate de que esta ruta sea correcta
import RegisterPage from './pages/Register'; // Asegúrate de que esta ruta sea correcta

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;