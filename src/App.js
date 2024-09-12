import './App.css';
import { useState } from 'react';

function App() {

  // attribute name and method setName
  const [name, setName] = useState("Sophia Loren");
  const [events, setEvents] = useState([
    { title: "Sophia's birthday party", id: 1 },
    { title: "Elvis's music concert", id: 2 },
    { title: "John's wedding", id: 3 },
    { title: "Sara's graduation", id: 4 }
  ]);

  const handleClick = () => {
    setName("Elvis Presley");
    console.log(name);
  }
  
  return (
    <div className="App">
      <h1>Hello, my name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}     
    </div>
  );
}

export default App;

/*
  When you click the button, the name changes to “Elvis Presley” 
  in the browser, but the console.log(name) still logs “Sophia Loren”.
*/