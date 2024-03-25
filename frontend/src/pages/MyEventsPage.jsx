import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../components/events/EventList';
import Loader from '../components/shared/Loader';

const MyEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/my-events'); // Endpoint for fetching user's events
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>My Events</h2>
      {loading ? <Loader /> : <EventList events={events} />}
    </div>
  );
};

export default MyEventsPage;
