import React, { useState } from 'react';

import './global.css'
import Routes from './routes';

//JSX 
// npm install react-icons
// npm install react-router-dom
// npm install axios

function App() {
  const [counter, setCounter ] = useState(0);
 
  //retorn array [valor, funcao de atualizacao do valor]
  // gooble fonts
  function increment(){
    setCounter(counter + 1);

  }

  return (
    
      <Routes />
    
  );
}

export default App;
