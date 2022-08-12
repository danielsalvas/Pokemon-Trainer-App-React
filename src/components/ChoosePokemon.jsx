import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { generarId } from "../helpers";
import Mensaje from "./Mensaje"; 
import Spinner from "./Spinner";
import EquipoPokemon from "./EquipoPokemon";

const ChoosePokemon = ({
  guardarPokemons, 
  setGuardarPokemons, 
  isValidPokemons,
  setIsValidPokemons,
  cargandoPerfil,
  setCargandoPerfil
}) => {

  const [pokemons, setPokemons] = useState([])
  const [mensaje, setMensaje] = useState('')
  const [selectedIndex, setSelectedIndex] = useState()
  const [pokemonsSeleccionados, setPokemonsSeleccionados] =  useState([])

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

    const equipoPokemon = pokemons.filter( (pokemon) => pokemon.id === id)

    setSelectedIndex(id - 1)
    
    setGuardarPokemons(current => [...current, equipoPokemon])

    if (guardarPokemons.length >= 3) {
      guardarPokemons.splice(2,3)
    }
    console.log(selectedIndex);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (guardarPokemons.length === 3) {
      setIsValidPokemons(true)
    } else {
      setMensaje('Debe escoger 3 Pokemon')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
    }

    setCargandoPerfil(true)

    setTimeout(() => {
      setCargandoPerfil(false)
    }, 3000);

  }

  return (
    <>

      {isValidPokemons ? (
          <> 
            {cargandoPerfil ? <Spinner />
              :
             <>
               <EquipoPokemon />
             </>
            }
          </>
        ) : (
        <div className="md:w-2/5 lg:w-2/5 mx-5 my-16">
          <h2 className="text-3xl text-blue">POKÉMON</h2>
          <p className="text-lg mt-5 ">Selecciona 3 Pokémon 
          <span className='text-blue font-bold'> para que sean parte de tu equipo.</span>
          </p>

          {mensaje && <Mensaje> {mensaje} </Mensaje>}
          
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 gap-4 my-8">
                {pokemons.map( (pokemon, i) => (
                  <>
                        <Pokemon
                          key={pokemon.key}
                          id={pokemon.id}
                          image={pokemon.sprites.other.dream_world.front_default}
                          name={pokemon.name}
                          agregarPokemon={agregarPokemon}
                          clase={i===selectedIndex ? 'bg-orange' : 'bg-gray-200'}
                        />     
                  </> 
                ))} 
            </div>
          
            <div className="text-center">
              <input 
                value='ESCOGER EQUIPO POKEMON'
                type="submit" 
                className='bg-indigo-800 w-1/2 p-3 text-white uppercase font-bold hover:bg-blue cursor-pointer transition-all rounded-3xl'
              />
            </div>
          </form>
      </div>
        )   
      }
      
      
    </>
  )
} 

export default ChoosePokemon;
