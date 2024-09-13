import './App.css';
import { useState, useEffect } from 'react';

function App() {

  // React enforces the "Rules of Hooks" to ensure consistent behavior of hooks.
  // useState (and other hooks) must be called at the top level of the component.
  const [showEvents, setShowEvents] = useState(true); // attribute and set method
  const [events, setEvents] = useState([              // attribute and set method
    { title: "Sophia's birthday party", id: 1 },
    { title: "Elvis's music concert", id: 2 },
    { title: "John's wedding", id: 3 },
    { title: "Sara's graduation", id: 4 }
  ]);  

  useEffect(() => {
    //console.log('events:', events);
    console.log('showEvents:', showEvents);
  });  

  // Bad practice - Direct State Usage: This version directly uses the events state to 
  // compute the new state. If events is stale (outdated) or if there are multiple state 
  // updates happening simultaneously, this can lead to incorrect state updates.
  //const handleClick = (id) => {
  //  setEvents(events.filter((event) => {
  //    return event.id !== id
  //  }));
  //  console.log('Event ID:', id);
  //}

  // Best practice - Functional State Update: This version uses a functional state update 
  // by passing a function to setEvents method. The function receives the previous state 
  // (prevEvents) as an argument and returns the new state. This ensures that the state 
  // update is based on the most recent state, avoiding issues with stale state (outdated).
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
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete Event</button>
        </div>
      ))}     
    </div>
  );
}

export default App;