import React,{useState} from 'react';
import './App.css';
import EventList from './EventList';
import Modal from './Modal';
import NewEventForm from './NewEventForm';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => { 
      return prevEvents.filter(event => id !== event.id)
    })
  }

  return (
    <div className="App">
      <h1 style= {{ color: "red", paddingTop:"50px"}}>Weekend Events</h1>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
       {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Hide Events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && (
        <Modal handleClose={handleClose}>
          <NewEventForm />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
