import pokemonLogo from '../img/pokemonLogo.png'

const Header = () => {
  return (
    <div className='w-36'>
        <div className='w-full m-2'>
            <img src={pokemonLogo} alt="Pokémon Logo" />
        </div>
    </div>
  )
}

export default Header
