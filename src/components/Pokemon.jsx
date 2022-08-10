import { useState } from "react"

const Pokemon = ({id, image, name, agregarPokemon}) => {

  return (
    <div onClick={ () => agregarPokemon(id) } className='bg-gray-200 rounded-3xl mx-auto p-5 h-48 w-48 cursor-pointer'>
        <div>
            <img src={image} alt={name} className='mx-auto h-28'/>
        </div>
        <div className='my-3 font-bold text-white'>
            <div className="flex text-sm justify-between bg-blue p-2 rounded-3xl">
                <p>#00{id}</p> <p className=''> {name} </p> 
            </div>
        </div>
    </div>
  )
}

export default Pokemon
