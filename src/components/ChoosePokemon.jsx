import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { generarId } from "../helpers";

const ChoosePokemon = ({guardarPokemons, setGuardarPokemons}) => {

  const[pokemons, setPokemons] = useState([])
  const[pokemonSeleccionado, setPokemonSeleccionado] =  useState(false)
    
  useEffect(() => {
    
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=9`;
      const res = await fetch(url);
      const pokemon = await res.json();

      const pokemonArray = pokemon.results.forEach(async pokemon => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data =  await res.json()
          data.key = generarId()
          setPokemons( currentList => [...currentList, data])
      })
    }; 
    console.log(pokemons);
    getPokemon();
    setPokemons([])
  }, [])
  
  const agregarPokemon = (id) => {
    setPokemonSeleccionado(true)
    const equipoPokemon = pokemons.filter( (pokemon) => pokemon.id === id)

    setGuardarPokemons(current => [...current, equipoPokemon])

    if (guardarPokemons.length >= 3) {
      guardarPokemons.splice(2,3)
    }
  }

  return (
    <>
      <div className="md:w-2/5 lg:w-2/5 mx-5 my-16">
          <h2 className="text-3xl text-blue">POKÉMON</h2>
          <p className="text-lg mt-5 ">Selecciona 3 Pokémon 
          <span className='text-blue font-bold'> para que sean parte de tu equipo.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
               {pokemons.map( pokemon => (
                <>
                  <Pokemon
                    key={pokemon.key}
                    id={pokemon.id}
                    image={pokemon.sprites.other.dream_world.front_default}
                    name={pokemon.name}
                    agregarPokemon={agregarPokemon}
                  />
                </> 
              ))} 
          </div>
        
        <div className="mx-auto text-center">
          <button className="bg-gray-300 p-4 rounded-3xl text-gray-600 font-bold hover:bg-blue hover:text-white">Guardar</button>
        </div>

      </div>
      
    </>
  )
} 

export default ChoosePokemon;
