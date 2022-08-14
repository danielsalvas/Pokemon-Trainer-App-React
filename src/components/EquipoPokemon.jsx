import PokemonElegido from "./PokemonElegido"
 
 const EquipoPokemon = ({guardarPokemons}) => {
   return (
    <div className="md:w-2/5 lg:w-2/5 mx-5 my-16">
      <h2 className="text-3xl text-blue">POKÉMON</h2>
      <p className="text-lg mt-5 ">Selecciona 3 Pokémon 
      <span className='text-blue font-bold'> para que sean parte de tu equipo.</span>
      </p>

      
        <div className="grid grid-cols-1 gap-4 my-8 ">
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
 