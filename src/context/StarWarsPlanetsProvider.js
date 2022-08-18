import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsInformation, setPlanetsInformation] = useState([]);

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

  const contextValue = {
    planetsInformation,
    setPlanetsInformation,
    data,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ contextValue }>
      { children }
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsPlanetsProvider;
