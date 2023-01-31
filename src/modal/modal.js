import "./modal.css";

export default function ModalPokemon({ closeModal, name, imagem, pokemon }) {
  return (
    <div className="modal-background" id="overlay">
      <div className="modal-container" id="modal">
        <div
          className={`pokemon-modal-${pokemon.types[0].type.name}`}
          style={{ width: "100%", height: "100%", borderRadius: "25px" }}
        >
          <div className="header-modal">
            <button
              onClick={() => closeModal(false)}
              className="text-[25px] pl-[95%]"
            >
              x
            </button>
          </div>
          <h1 className="pokemon-name">{name}</h1>
          <div className="flex pl-[40%]">
            <img src={imagem} alt={name} className="w-[200px] h-[200px]" />

            <div>
              {pokemon.stats.map((stats, index) => {
                return (
                  <div key={index} className=" ">
                    <div className=" bg-white h-[40px] w-[250px] p-2 m-2 rounded-xl ">
                      <div className="flex justify-between bg-green-400">
                        <div>{stats.stat.name}</div>
                        <div>{stats.base_stat}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type ">
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
                      color: "white",
                    }}
                  >
                    {type.type.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            {pokemon.abilities.map((ability, index) => {
              return (
                <div key={index} className="pokemon-type ">
                  <div className="bg-gray-500 h-[40px] p-2 m-2 rounded-xl flex justify-center">
                    {ability.ability.name}
                  </div>
                </div>
              );
            })}

            {/**status */}
          </div>
        </div>
      </div>
    </div>
  );
}
