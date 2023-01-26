import React from "react";
import "./pokemon.css";

import Fundo from '../../assets/fundo.svg'
const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("pode favoritar");
  };
  const heart = "❤";
console.log("pokemon", pokemon)
  return (
   
      <div className={`pokemon-card-${pokemon.types[0].type.name}`} style={{ backgroundImage: `url(${Fundo})`}}>
        <div className="pokemon-image-container">
        </div>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>{pokemon.id}</div>
          </div>

          <div className="card-botton">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                    
                  </div>
                );
              })}
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          </div>
        </div>
      </div>
  
  );
};
export default Pokemon;
