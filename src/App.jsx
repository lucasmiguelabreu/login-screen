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
          <img src="https://github.com/lucasmiguelabreu/login-screen/blob/master/src/assets/verificado.png?raw=true" alt="Login bem-sucedido" />
          <p>Login Realizado com Sucesso!!</p>
        </div>
      )}
    </div>
  );
};

export default App;


