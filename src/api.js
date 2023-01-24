//api js vai exportar metodos que vai ser utilizado pela aplicacao. Esses metodos vao conversar com a api

export const searchPokemon = async (pokemon) => {

    //vai tentar fazer alguma coisa no bloco try e cas o de algum erro sera facil tratar

    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("erro: ", error)
    }
}