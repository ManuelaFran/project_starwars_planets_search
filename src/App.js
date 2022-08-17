import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
