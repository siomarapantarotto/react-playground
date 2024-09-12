import './App.css';
import { useState } from 'react';

function App() {

  // attribute name and method setName
  const [name, setName] = useState("Sophia Loren"); 

  const handleClick = () => {
    setName("Elvis Presley");
    console.log(name);
  }
  
  return (
    <div className="App">
      <h1>Hello, my name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>      
    </div>
  );
}

export default App;

/*
  When you click the button, the name changes to “Elvis Presley” 
  in the browser, but the console.log(name) still logs “Sophia Loren”.
*/