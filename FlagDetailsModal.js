import React from 'react';

function FlagDetailsModal({ isVisible, onClose, flagDetails }) {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <img src={flagDetails.image} alt={flagDetails.name} />
        <h2>{flagDetails.name}</h2>
        <p>Capital: {flagDetails.capital}</p>
       
      </div>
    </div>
  );
}

export default FlagDetailsModal;
