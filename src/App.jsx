import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div className="success-container">
          <img src="/src/assets/verificado.png" alt="Login bem-sucedido" />
          <p>Login Realizado com Sucesso!!</p>
        </div>
      )}
    </div>
  );
};

export default App;


