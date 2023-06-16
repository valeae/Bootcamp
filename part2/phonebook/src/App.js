import React, { useState } from 'react'

const App= () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-8956432'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const Search = persons.filter(person => 
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )

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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <form action="">
      <div>
        Filter shown with:
          <input value={filter} onChange={handleFilter}/>
      </div>
      </form>
      
      <h2>Add a new</h2>
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

      <h2>Numbers</h2>
      <ul>
        {Search.map(person =>
          <li key={person.name}>{person.name} - {person.number}</li>
          )}
      </ul>

    </div>
  )
};

export default App;
