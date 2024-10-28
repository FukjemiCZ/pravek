import React, { useEffect, useState } from 'react';
import './Timeline.module.css';

function Timeline({ filename }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Dynamický import JSON souboru ze složky src/data/
        const programData = await import(`../data/${filename}`);
        setEvents(programData.events || []);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [filename]);

  return (
    <div className="timeline">
      {loading ? (
        <div>Loading program...</div>
      ) : events.length === 0 ? (
        <div>No events found.</div>
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
