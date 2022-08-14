import PokemonElegido from "./PokemonElegido"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
 
 const EquipoPokemon = ({guardarPokemons}) => {
   return (
    <div className="md:w-3/5 lg:w-3/5 mx-5 my-16">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-3xl text-blue">MIS POKÉMON</h2>
          <p className="text-lg mt-5 ">Aquí se muestran 
          <span className='text-blue font-bold'>las skill de tus nuevos compañeros</span>
          </p>
        </div>

        <div>
          <button className="bg-white px-2 rounded-lg border-blue border-2 text-blue"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            <span className="mx-5 ">Editar</span>
          </button>
        </div>
      </div>

      
        <div className="lg:w-4/5 w-full gap-4 my-8 md:h-screen md:overflow-y-scroll mx-auto">
            {guardarPokemons.map( (pokemon) => (
              <>
                    <PokemonElegido
                      key={pokemon[0].key}
                      id={pokemon[0].id}
                      image={pokemon[0].sprites.other.home.front_default}
                      name={pokemon[0].name}
                      types={pokemon[0].types[0].type.name}
                      hp={pokemon[0].stats[0].base_stat}
                      ataque={pokemon[0].stats[1].base_stat}
                      defensa={pokemon[0].stats[2].base_stat}
                      ataqueEspecial={pokemon[0].stats[3].base_stat}
                      defensaEspecial={pokemon[0].stats[4].base_stat}
                      velocidad={pokemon[0].stats[5].base_stat}
                    />     
              </> 
            ))} 
        </div>
    </div> 
   )
 }
 
 export default EquipoPokemon
 