import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import titulo from '../image/titulo.png';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setuser] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setuserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  const validateuser = (value) => {
    const userRegex = /^[a-zA-Z0-9_]+$/;
    if (!userRegex.test(value)) {
      setuserError('Por favor ingresa un usuario válido.');
    } else {
      setuserError('');
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres, 1 mayúscula y 1 número.');
    } else {
      setPasswordError('');
    }
  };

  const handleuserChange = (e) => {
    const value = e.target.value;
    setuser(value);
    validateuser(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleLogin = () => {
    if (user && password && !userError && !passwordError) {

      localStorage.setItem('username', user);
      navigate('/cards');
    } else {
      validateuser(user);
      validatePassword(password);
    }
  };

  React.useEffect(() => {
    setFormValid(user && password && !userError && !passwordError);
  }, [user, password, userError, passwordError]);

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={titulo} alt="Título de la página" className="login-logo" />
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={handleuserChange}
            className={userError ? 'error-shake' : ''}
            required
          />
          {userError && <p className="error-text">{userError}</p>}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? 'error-shake' : ''}
            required
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
          <button type="button" onClick={handleLogin} disabled={!formValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;