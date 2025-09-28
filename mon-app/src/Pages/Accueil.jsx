import React, { useEffect, useState } from "react"
import Pays from "../components/Pays";

function Accueil() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState("All");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,cca3,flags,latlng")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
      .catch(err => console.error("Erreur API :", err));
  }, []);

  // Filtrer par continent
  const filteredCountries = continent === "All"
    ? countries
    : countries.filter(c => c.region === continent);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">🌍 Liste des pays</h2>

      {/* Sélecteur de continent */}
      <div className="text-center mb-4">
        <select 
          className="form-select w-50 mx-auto"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="All">Tous les continents</option>
          <option value="Africa">Afrique</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asie</option>
          <option value="Americas">Amériques</option>
          <option value="Oceania">Océanie</option>
        </select>
      </div>

      {/* Liste des pays */}
      <div className="d-flex flex-wrap justify-content-center">
        {filteredCountries.map((country) => (
          <Pays key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
