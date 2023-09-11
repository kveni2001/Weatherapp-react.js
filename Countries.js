import React, { useState, useEffect } from 'react';
import './index.css';


function Countries() {
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const flagsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(countries.length / flagsPerPage);
  const startIndex = (page - 1) * flagsPerPage;
  const endIndex = startIndex + flagsPerPage;
  const flagsToDisplay = countries.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <h1>Flags and Country Names</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && flagsToDisplay.length > 0 && (
        <div className="flag-list">
          {flagsToDisplay.map((country) => (
            <div className="country" key={country.cca2}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="flag"
              />
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrevClick} disabled={page === 1}>
          Previous
        </button>
        <span>{page}</span>
        <button onClick={handleNextClick} disabled={page === totalPages}>
          Next
        </button>
      </div>
      
    </div>
    
  );
}
 export default Countries;
