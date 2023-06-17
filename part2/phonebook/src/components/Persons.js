import React from "react";

function Persons ({search}) {
    return (
        <ul>
        {search.map(person =>
          <li key={person.name}>{person.name} - {person.number}</li>
          )}
      </ul>
    )
}

export default Persons;