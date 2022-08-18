import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Header />
      <Filters />
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
