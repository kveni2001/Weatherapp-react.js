
import React from 'react';

function Popup({ country, weatherData, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={country.flag} alt={country.name} />
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Humidity: {country.humidity}</p>
        <p>Weather: {weatherData.weatherText}</p>
      </div>
    </div>
  );
}

export default Popup;
