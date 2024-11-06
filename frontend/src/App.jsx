import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const DataCard = () => {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fruitsResponse = await axios.get('/api/fruitsName');
        const vegetablesResponse = await axios.get('/api/vegetablesName');
        console.log('Fruits data:', fruitsResponse.data);
        console.log('Vegetables data:', vegetablesResponse.data);

        if (Array.isArray(fruitsResponse.data)) {
          setFruits(fruitsResponse.data);
        } else {
          console.error('Fruits data is not an array:', fruitsResponse.data);
        }

        if (Array.isArray(vegetablesResponse.data)) {
          setVegetables(vegetablesResponse.data);
        } else {
          console.error('Vegetables data is not an array:', vegetablesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fruits</h1>
      <div className="card-container">
        {fruits.map((fruit, index) => (
          <div key={index} className="card">
            <h2>{fruit.name}</h2>
            <p>{fruit.description}</p>
          </div>
        ))}
      </div>
      <h1>Vegetables</h1>
      <div className="card-container">
        {vegetables.map((vegetable, index) => (
          <div key={index} className="card">
            <h2>{vegetable.name}</h2>
            <p>{vegetable.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCard;
