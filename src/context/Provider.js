import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './Context';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState('');

  async function fetchData() {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    planets,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
