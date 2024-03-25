import React from "react";
import "./styles/EventDetail.css"; // Import CSS file for styling

const EventDetail = ({ event }) => {
  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
      <p>Capacity: {event.capacity}</p>
      <p>Registration Deadline: {event.registrationDeadline}</p>
      <button>Register</button>
    </div>
  );
};

export default EventDetail;
