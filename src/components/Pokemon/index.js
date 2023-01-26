import React, { useEffect } from "react";
import "./pokemon.css";

import Fundo from "../../assets/fundo.svg";
const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("pode favoritar");
  };

  

  

  const heart = "❤";
console.log(pokemon)
  return (
    <button className="pokemon-btn">
    <div className="card-container">
        <div
          className={`pokemon-card-${pokemon.types[0].type.name}`}
          style={{ backgroundImage: `url(${Fundo})`,backgroundRepeat:"repeat-x",backgroundPosition:"center left"}}
        >
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <div className="card-body">
            <div className="card-top">
              <h3>{pokemon.name}</h3>
              <h2>#{pokemon.id}</h2>
              </div>
             
              <div className="card-bottom">
                {pokemon.types.map((type, index) => {
                  return (
                    <div key={index} className="pokemon-type">
                      <div className={`pokemon-type-${type.type.name}`}>
                        {type.type.name}
                      </div>
                    </div>
                  );
                })}
                </div>
                 </div>
                 
          </div>
      </div>
      </button>
  );
};
export default Pokemon;
