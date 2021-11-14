import React, {Fragment} from 'react';
import styles from './EventList.module.css'

export default function EventList({ events, handleClick}){
    return(
        <div>
            {events.map((event, index) => (
                <div key={index} className={styles.card}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete Event</button>
                </div>
            ))}
        </div>
    )
}