import React, { useEffect } from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    

  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });
  return (
    <body>
      <div id = "welcome">
        <div id = "btn-container">
          <button id = "btn" onClick = {handleClick}>Run for Ukraine</button>
        </div>
        <div id = "description">
          <i id = "desc-text">click to get started</i>
        </div>
      </div>


    </body>
  );
}

export default App;
