import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Header() {
  const { filterByName, setFilterByName } = useContext(StarWarsPlanetsContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilterByName({ name: value });
  }
  return (
    <div>
      <label htmlFor="nameFilter">
        <input
          id="nameFilter"
          data-testid="name-filter"
          type="text"
          value={ filterByName.name }
          name="text"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default Header;
