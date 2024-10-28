import React, { useEffect, useState } from 'react';
import programData from '../data/timeline-2025.json'; // Import JSON dat

import './Timeline.module.css';

function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Načítání dat z importovaného JSON
    setEvents(programData.events);
  }, []);

  return (
    <div className="timeline">
      {events.length === 0 ? (
        <div>Loading program...</div> // Zobrazíme, pokud nejsou data
      ) : (
        events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">
              <strong>{event.date}</strong> - {event.time}
            </div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Timeline;
