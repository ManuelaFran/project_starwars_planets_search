import React, { useContext, useState, useEffect } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Header() {
  const [name, setName] = useState('');
  const { data, setPlanetsInformation } = useContext(StarWarsPlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  useEffect(() => {
    setPlanetsInformation(data
      .filter((planet) => planet.name.includes(name)));
  }, [name]);

  return (
    <div>
      <label htmlFor="nameFilter">
        <input
          id="nameFilter"
          data-testid="name-filter"
          type="text"
          value={ name }
          name="text"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default Header;
