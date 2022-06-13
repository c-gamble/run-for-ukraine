import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
  setCount(count+1);
  };
    return (
      <body>
        <div id = "main">
          <div id = "btn-container">
            <button id = "btn" onClick = {handleClick}>Run for Ukraine</button>
          </div>
          <div id = "description">
            <i>click to get started</i>
          </div>
        </div>
      </body>
    );
}

export default App;
