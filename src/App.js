import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Pokedex from './components/pokedex';
import Searchbar from './components/searchbar';


function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
     <Pokedex />
    </div>
  );
}

export default App;
