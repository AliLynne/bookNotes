import React from 'react'

const PersonList = ({ people }) => {
  return (
    <ul>
      {people.map((person, index) => {
        return (
          <li key={index}>
            <p>{person.name}</p>
            <p>Birth: {person.birth}</p>
            <p>Death: {person.death}</p>
            <p>{person.info}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default PersonList
