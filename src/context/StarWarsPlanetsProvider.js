import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getStarWarsPlanets from '../services/StarWarsPlanetsAPI';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function StarWarsPlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsInformation, setPlanetsInformation] = useState([]);

  useEffect(() => {
    getStarWarsPlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => {
        setPlanets(data.results);
        setPlanetsInformation(data.results);
      });
  }, []);

  const states = {
    data: planets,
    setPlanets,
    planetsInformation,
    setPlanetsInformation,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ states }>
      { children }
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.element,
};

StarWarsPlanetsProvider.defaultProps = {
  children: <>default</>,
};

export default StarWarsPlanetsProvider;
