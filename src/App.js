import React from 'react';
import RecipeGenerator from './components/RecipeGenerator';


function App() {
  return (
    <div className="App">
      <h2 className="center-align">¿Qué cenamos hoy?</h2>
      <h3 className="center-align">¿Cansado de hacer esa misma pregunta?</h3>
      <h4 className="center-align">Haz click en el botón para generar una receta al azar</h4>
      
      < RecipeGenerator />
    </div>
  );
}

export default App;
