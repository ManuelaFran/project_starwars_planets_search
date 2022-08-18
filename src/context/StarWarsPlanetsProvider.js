import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsInformation, setPlanetsInformation] = useState(data);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    async function getStarWarsPlanets() {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((response) => {
          setPlanetsInformation(response.results);
          setData(response.results);
        });
    }
    getStarWarsPlanets();
  }, []);

  const states = {
    planetsInformation,
    setPlanetsInformation,
    filterByName,
    setFilterByName,
    data,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ states }>
      { children }
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsPlanetsProvider;
