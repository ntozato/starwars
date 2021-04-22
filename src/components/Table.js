import React, { useContext } from 'react';
import planetsContext from '../context/Context';

function Table() {
  const { planets, filteredPlanets } = useContext(planetsContext);

  const tableHeader = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const planetsArray = keys.filter((elem) => elem !== 'residents');
      return planetsArray.map((elem) => (
        <th key={ elem }>{elem}</th>
      ));
    }
  };

  const tableBody = () => {
    if (filteredPlanets) {
      return filteredPlanets.map((planet, index) => (
        <tr key={ index }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td className="word-wrap">{planet.films}</td>
          <td className="word-wrap">{planet.created}</td>
          <td className="word-wrap">{planet.edited}</td>
          <td className="word-wrap">{planet.url}</td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeader()}
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
