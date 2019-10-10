import React from 'react'

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event, index) => {
        return (
          <li key={index}>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.event}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default EventList
