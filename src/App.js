import React,{useState} from 'react';
import './App.css';
import EventList from './EventList';
import Modal from './Modal';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'React Dojo', id:1},
    {title: 'Swelte Meetup', id:2},
    {title: 'Remix Launch', id:3}
  ])

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
      <h1>Weekend Events</h1>
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
          <h2>This is a modal</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dolore pariatur cupiditate mollitia, aperiam labore facere repellat vero delectus unde.</p>
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
