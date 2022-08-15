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

  const [pokemons, setPokemons] = useState([]) //Almacena los pokemons de petición a la API
  const [mensaje, setMensaje] = useState('') //Mensajes de error
  const [editantoPokemons, setEditandoPokemons] = useState(false) //Ayuda a identificar si se está editando

  useEffect(() => {
    
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=30`;
      const res = await fetch(url);
      const pokemon = await res.json();

      const pokemonArray = pokemon.results.forEach(async pokemon => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data =  await res.json()
          data.key = generarId()
          data.toggled = false;
          setPokemons( currentList => [...currentList, data])
          pokemons.sort(function(a, b) {return a.id - b.id})
      })
    }; 
    
    getPokemon();
    setPokemons([])
  }, [])

  const agregarPokemon = (id) => {

    const equipoPokemon = pokemons.filter( (pokemon) => pokemon.id === id)

    if (equipoPokemon[0].toggled === false) {
      equipoPokemon[0].toggled = true;
    }   
    
    setGuardarPokemons(current => [...current, equipoPokemon])

    if (guardarPokemons.length >= 3) {
      guardarPokemons.splice(2,3)
    }
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
               <EquipoPokemon 
                  guardarPokemons={guardarPokemons}
                  setGuardarPokemons={setGuardarPokemons}
                  setIsValidPokemons={setIsValidPokemons}
                  setEditandoPokemons={setEditandoPokemons}
               />
             </>
            }
          </>
        ) : (
        <div className="md:w-2/5 lg:w-2/5 mx-5 my-16">
          <div className="md:text-left text-center">
            <h2 className="text-3xl text-blue">{
              editantoPokemons ? 'ESCOGE NUEVAMENTE TU EQUIPO' : 'POKEMÓN'
            }</h2>
            <p className="text-lg mt-5 ">Selecciona 3 Pokémon 
            <span className='text-blue font-bold'> para que sean parte de tu equipo.</span>
            </p>
          </div>

          {mensaje && <Mensaje> {mensaje} </Mensaje>}
          
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 my-3 md:h-screen md:overflow-y-scroll">
                {pokemons.map( (pokemon) => (
                  <>
                        <Pokemon
                          key={pokemon.key}
                          id={pokemon.id}
                          image={pokemon.sprites.other.home.front_default}
                          name={pokemon.name}
                          agregarPokemon={agregarPokemon}
                          guardarPokemons={guardarPokemons}
                          clase={pokemon.toggled ? 'bg-orange' : 'bg-gray-200'}
                        />     
                  </> 
                ))} 
            </div>
          
            <div className="text-center">
              <input 
                value={editantoPokemons ?'EDITAR EQUIPO': 'ESCOGER EQUIPO'}
                type="submit" 
                className='bg-green-800 w-1/2 p-5 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all rounded-3xl text-xs'
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
