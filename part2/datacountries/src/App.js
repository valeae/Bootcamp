import React, {useState, useEffect} from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const Search = countries.filter((country) =>
    country.name.common.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  

  return (
    <div>
      <h1>Countries</h1>
      <Filter Filter={filter} handleFilter={handleFilter}/>
      <Countries Search={Search}/>
    </div>
  );
}

export default App;
