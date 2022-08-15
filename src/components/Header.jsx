import pokemonLogo from '../img/pokemonLogo.png'

const Header = ({
  isValidPokemons,
  setImage,
  setPerfil,
  setGuardarPokemons,
  setIsValidForm,
  setIsValidPokemons,
  setEditarPerfil
}) => {

  const handleReset = () => {
    setImage(null)
    setPerfil({})
    setGuardarPokemons([])
    setIsValidForm(false)
    setIsValidPokemons(false)
    setEditarPerfil({})
  }

  return (
    <div>
      
      {isValidPokemons ? (
        <div className='flex justify-between'>
          <div className='w-36'>
            <div className='w-full m-2'>
              <img src={pokemonLogo} alt="Pokémon Logo" />
            </div>
          </div>

          <div className='my-auto mx-10 font-bold' >
            <button onClick={handleReset} className='bg-red-900 p-2 w-36 text-white rounded-3xl hover:bg-red-500'>Reset APP</button>
          </div>
        </div>
        
      ) : (
        <div className='w-36'>
            <div className='w-full m-2'>
              <img src={pokemonLogo} alt="Pokémon Logo" />
            </div>
          </div>
      )}
    </div>  
  )
}

export default Header
