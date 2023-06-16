import React, { useState } from 'react'

const App= () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }])
  const [ newName, setNewName ] = useState('')

  const deletePerson = () => {setNewName("")}

  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName, 
    }

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      deletePerson()
      return
    } 

    setPersons(persons.concat(newPerson))
    setNewName('')
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name}</li>
          )}
      </ul>
    </div>
  )
};

export default App;
