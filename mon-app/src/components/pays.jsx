import React, { useState } from "react";

function Pays({ country }) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="card shadow-sm m-2" 
      style={{ width: "14rem", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img 
        src={country.flags.png} 
        alt={country.name.common} 
        className="card-img-top"
        style={{ height: "120px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h6>{country.name.common}</h6>
        <p className="text-muted">{country.region}</p>
      </div>

      {hover && (
        <div className="card-footer bg-light">
          <p><strong>Population :</strong> {country.population.toLocaleString()}</p>
          <p><strong>Capitale :</strong> {country.capital ? country.capital[0] : "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default Pays;

