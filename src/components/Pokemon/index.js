import "./pokemon.css";
import Fundo from "../../assets/fundo.svg";
import pokebola from "../../assets/pokebola.png";
import React, { useState } from "react";
import ModalPokemon from "../modal/modal";

const Pokemon = (props) => {
  const { pokemon } = props;
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="card-container ">
      <button onClick={() => openModal()} className="pokemon-btn">
        <div
          className={`pokemon-card-${pokemon.types[0].type.name}`}
          style={{
            border: "1px solid black",
            borderRadius: "25px",
            backgroundImage: `url(${Fundo})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center left",
            display: "flex",
            fontSize: "20px",
            height: "150px",
            width: "400px ",
            
          }}
        >
          {pokemon.sprites.front_default ? (
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          ) : (
            <img
              src={pokebola}
              alt={pokemon.name}
              className="h-[100%] w-[100%]] p-4"
            />
          )}
          <div className="card-body">
            <div className="card-top">
              <h3>{pokemon.name}</h3>
              <h2>#{pokemon.id}</h2>
            </div>
            <div className="card-bottom">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type">
                    <div
                      className={`pokemon-type-${type.type.name}`}
                      style={{
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                        borderRadius: "25px",
                        alignItems: "center",
                        textAlign: "center",
                        height: "30px",
                        width: "70px",
                        marginRight: "6px",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        marginTop: "60%",
                      }}
                    >
                      <div className="text-[15px]">
                      {type.type.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </button>
      <div></div>
      {open ? (
        <div>
          <ModalPokemon
            closeModal={setOpen}
            name={pokemon.name}
            imagem={pokemon.sprites.front_default}
            pokemon={pokemon}
          />
        </div>
      ) : null}
    </div>
  );
};
export default Pokemon;
