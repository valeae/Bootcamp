import React from "react";

function PersonForm({addPerson, newName, newNumber, handlePersonChange, handleNumberChange}) {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handlePersonChange} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default PersonForm;
