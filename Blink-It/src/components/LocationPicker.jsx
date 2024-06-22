import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi'; // Import the location icon
import './LocationPicker.css';

const LocationPicker = () => {
  const [location, setLocation] = useState("Mumbai");

  return (
    <div className="locdiv">
      <FiMapPin className="location-icon" size={24} /> {/* Location Icon */}
      <h2 className="text-sm _text-default">{location}</h2>
    </div>
  );
};

export default LocationPicker;
