import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import "./App.css";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";
import notfound from "./assets/notfound.jpg";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 27;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }
  return (
    <div className="  bg-slate-400 ">
      <div className="pl-2 pr-2 ">
        <Navbar />

        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <div className="w-full h-full">
            <div className="text-[25px] flex justify-center">
              Não foi possivel encontrar o pokemon
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full  opacity-60"
                src={notfound}
                alt="notfound"
              />
            </div>
          </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
