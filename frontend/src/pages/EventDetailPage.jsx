import React from "react";
import { useParams } from "react-router-dom";
import EventDetail from "../components/events/EventDetail";

const EventDetailPage = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find((event) => event._id === eventId);

  return (
    <div>
      <h2>Event Detail</h2>
      {event ? <EventDetail event={event} /> : <p>Event not found</p>}
    </div>
  );
};

export default EventDetailPage;
