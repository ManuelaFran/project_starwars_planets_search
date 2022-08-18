import React, { useState, useContext, useEffect } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Filters() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const { planetsInformation, setPlanetsInformation,
  } = useContext(StarWarsPlanetsContext);

  const [filterCombination, setFilterCombination] = useState({
    column: columnFilter,
    comparison: comparisonFilter,
    value: valueFilter,
  });

  const [multipleFilters, setMultipleFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const columnFilterChange = ({ target }) => {
    const { value } = target;
    setColumnFilter(value);
  };

  const comparisonFilterChange = ({ target }) => {
    const { value } = target;
    setComparisonFilter(value);
  };

  const valueFilterChange = ({ target }) => {
    const { value } = target;
    setValueFilter(value);
  };

  useEffect(() => {
    setFilterCombination({
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    });
  }, [columnFilter, comparisonFilter, valueFilter]);

  const filterByComparison = () => {
    const { column, comparison, value } = filterCombination;
    if (comparison === 'maior que') {
      setPlanetsInformation(planetsInformation
        .filter((planet) => planet[column] > +value));
    } else if (comparison === 'menor que') {
      setPlanetsInformation(planetsInformation
        .filter((planet) => planet[column] < +value));
    } else {
      setPlanetsInformation(planetsInformation
        .filter((planet) => planet[column] === value));
    }
    setMultipleFilters(multipleFilters.filter((option) => option !== column));
  };

  return (
    <div>
      <label htmlFor="columnFilter">
        Column
        <select
          id="columnFilter"
          name="column"
          data-testid="column-filter"
          onChange={ columnFilterChange }
        >
          {
            multipleFilters.map((option, index) => (
              <option key={ index } value={ option }>{ option }</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="comparisonFilter">
        Operator
        <select
          id="comparisonFilter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ comparisonFilterChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="valueFilter">
        Valor
        <input
          id="valueFilter"
          type="number"
          name="value"
          value={ valueFilter }
          data-testid="value-filter"
          onChange={ valueFilterChange }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByComparison }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default Filters;
