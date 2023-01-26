import React, {useEffect, useState} from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import './App.css'
import Navbar from './components/navbar';
import Pokedex from './components/pokedex';
import Searchbar from './components/searchbar';


function App() {

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages]= useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [notFound, setNotFound] = useState(false)

  const itensPerPage = 27

  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

   useEffect(() => {
    fetchPokemons();
  }, [page]);

const onSearchHandler = async (pokemon) =>{
  if(!pokemon){
    return fetchPokemons();
  }
  setLoading(true)
  setNotFound(false)
  const result = await searchPokemon(pokemon)
  if(!result){
    setNotFound(true)
  }else{
    setPokemons([result])
  }
  setLoading(false)
}
  return (
    
    <div className='pl-2 pb-4 bg-slate-400'>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
     <Pokedex 
  
     pokemons={pokemons} 
     loading={loading}
     page={page}
     totalPages={totalPages}
     setPage={setPage}
     />
    
    </div>
  );
}

export default App;
