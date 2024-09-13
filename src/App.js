import './App.css';
import { useState } from 'react';

function App() {

  // attribute name and method setName
  const [events, setEvents] = useState([
    { title: "Sophia's birthday party", id: 1 },
    { title: "Elvis's music concert", id: 2 },
    { title: "John's wedding", id: 3 },
    { title: "Sara's graduation", id: 4 }
  ]);

  // Bad practice - Direct State Usage: This version directly uses the events state to 
  // compute the new state. If events is stale or if there are multiple state updates 
  // happening simultaneously, this can lead to incorrect state updates.

  //const handleClick = (id) => {
  //  setEvents(events.filter((event) => {
  //    return event.id !== id
  //  }));
  //  console.log('Event ID:', id);
  //}

  // Good practice - Functional State Update: This version uses a functional state update 
  // by passing a function to setEvents method. The function receives the previous state 
  // (prevEvents) as an argument and returns the new state. This ensures that the state 
  // update is based on the most recent state, avoiding issues with stale state.
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      });
    });
    console.log('Event ID:', id);
  }
  
  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete Event</button>
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