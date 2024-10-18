import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {

  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Sophia's birthday party", id: 1 },
    { title: "Elvis's music concert", id: 2 },
    { title: "John's wedding", id: 3 },
    { title: "Sara's graduation", id: 4 }
  ]);  

  //console.log('showEvents:', showEvents);
  //console.log('showModal:', showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      });
    });
    console.log('Event ID:', id);
  }

  const handleClose = () => {
    setShowModal(false)
  }

  // just to show another way to pass props to a component
  const subtitle = "All the latest events in the world";
    
  return (
    <div className="App">
      
      <Title title="The World Fantastic Events" subtitle={subtitle}/>
      
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
      {showEvents && <EventList events = {events} handleClick={handleClick}/>}    

      { showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer
        Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer
        Lorem ipsum dolor sit amet</p>
      </Modal>}

      <div>
        <button onClick={()=>setShowModal(true)}>Terms and Conditions</button>
      </div>
           
    </div>
  );
}

export default App;