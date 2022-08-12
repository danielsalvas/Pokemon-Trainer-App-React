import { useState } from "react"

const Pokemon = ({id, image, name, agregarPokemon, clase}) => {

  return (
    <div onClick={ () => agregarPokemon(id) } className={`${clase} cursor-pointer p-3 rounded-3xl`}>
          <div>
              <img src={image} alt={name} className='mx-auto h-28'/>
          </div>
          <div className='my-3 font-bold text-white'>
              <div className="flex text-sm justify-between bg-blue p-2 rounded-3xl">
                  <p>#00{id}</p> <p className=''> {name.toUpperCase()} </p> 
              </div>
          </div>
    </div>
  )
}

export default Pokemon
