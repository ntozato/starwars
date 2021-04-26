import React, { useContext } from 'react';
import planetsContext from '../context/Context';

function Inputs() {
  const { filterPlanets, filterOptions, filterByNumber, columns } = useContext(planetsContext);

  return (
    <div>
      <div>
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          onChange={ filterPlanets }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ filterOptions }
        >
          {columns.map((column) => (
            <option key={ column }>{column}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ filterOptions }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="number"
          onChange={ filterOptions }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterByNumber }
        >
          Filtrar

        </button>
      </div>
    </div>
  );
}

export default Inputs;
