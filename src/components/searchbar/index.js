import react, { useState } from 'react'
import { searchPokemon } from '../../api'
import './search.css'


const Searchbar = () => {

    const [search, setSearch] = useState('Charizard')
    const [pokemon, setPokemon] = useState()

    //alterar o valor ao digitar
    const onChangeHandle = (e) => {
        setSearch(e.target.value)
    }

    const onClickBtnHandle = () => {
        onSearchHandle(search)
    }

    const onSearchHandle = async (pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
        
        }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder='Buscar Pokemon'onChange={onChangeHandle}/></div>
            <div className='searchbar-btn'>
                <button onClick={onClickBtnHandle}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                   <div>nome: {pokemon.name}</div>
                   <div>peso: {pokemon.wight}</div>
                   <img src={pokemon.sprites.front_default} alt="info pokemon" />
                </div>

            ) : null }
            </div>        
    )
}

export default Searchbar