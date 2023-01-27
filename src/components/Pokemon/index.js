import "./pokemon.css";

import Fundo from "../../assets/fundo.svg";
const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <button className="pokemon-btn ">
      <div className="card-container ">
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
            boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.5)",
            height: "200px",
            width: "540px",
          }}
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
                    <div
                      className={`pokemon-type-${type.type.name}`}
                      style={{
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                        borderRadius: "25px",
                        alignItems: "center",
                        textAlign: "center",
                        height: "45px",
                        width: "100px",
                        marginRight: "6px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
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
