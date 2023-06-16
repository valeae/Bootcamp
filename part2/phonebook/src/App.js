import React, { useState } from 'react'

const App= () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '39-44-8956432'}])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const deletePerson = () => {
    setNewName("")
    setNewNumber("")
  };

  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName, 
      number: newNumber
    }

    if (persons.find(person => person.name === newName && person.number === newNumber)) {
      alert(`${newName} is already added to phonebook`)
      deletePerson()
      return
    } 

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name} - {person.number}</li>
          )}
      </ul>
    </div>
  )
};

export default App;
