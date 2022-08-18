import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Header />
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
