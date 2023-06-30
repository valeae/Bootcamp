import React from "react";

function Countries({ Search }) {
  if (Search.length === 1) {
    return (
      <ul>
        {Search.map((country) => (
          <li key={country.name.common}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            
            <ul>
            <h2>Languages</h2>
              {Object.values(country.languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            
            <img src={country.flags.png} key={country.flags.png} alt={country.name.common} width={150} />
          </li>
          
        ))}
      </ul>
    );
  } 
  else if (Search.length > 10) {
    return "Too many matches, specify another filter";
  } 
  else {
    return (
      <ul>
        {Search.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    );
  }
}

export default Countries;
