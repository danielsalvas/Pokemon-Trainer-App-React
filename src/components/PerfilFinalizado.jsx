import React from 'react'
import medalla from '../img/medalla.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
const PerfilFinalizado = ({perfil, image, nuevaEdad, editarPerfil, setEditarPerfil}) => {

const primerNombre = (nombre) => {
    
    let result = nombre.split(' ')
    let final = result[0]
    return final
}

const handleEditar = () => {
    setEditarPerfil(perfil)
}

  return (
    <div className='md:w-2/5 lg:w-2/5 md:h-screen my-20'>
            <div className='md:flex md:text-left text-center w-11/12'>
                <div className="mx-10">
                    <p className='text-blue text-4xl font-bold'>¡Hola! {primerNombre(perfil.nombre)}</p>
                    <p className="m-3">Te damos la bienvenida a tu perfil entrenador</p>
                </div>

                <div>
                    <button onClick={handleEditar} className=" bg-white my-2 px-1 rounded-lg border-blue border-2 text-blue hover:bg-blue hover:text-white text-sm w-28 h-8"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                        <span className="mx-5">Editar</span>
                    </button>
                </div>
            </div>
    
            <div className='flex justify-center text-center'>
                <div className='bg-orange w-96 h-[32rem] flex-col rounded-xl my-14'>
    
                    <div className="my-7 flex justify-around">
                        <h1 className="font-bold text-xl">Entrenador</h1>
                        <img className='w-10 h-10' src={medalla} alt="" />
                    </div>
    
                    <div className='w-64 h-64 bg-gray-200 rounded-full mx-auto border-white border-8'
                    style={{background: image ? `url('${image}') no-repeat center/cover` : ''}}
                    >
                    </div>
    
                    <div className='my-7 font-bold text-blue text-xl'>
                        <div className="flex justify-between mx-12">
                            <p>Pasatiempo: </p> <p className='text-black font-thin'> {perfil.pasatiempo} </p> 
                        </div>
                        <div className="flex justify-between mx-12">
                            <p>Edad: </p> <p className='text-black font-thin'> {nuevaEdad} Años</p> 
                        </div>
                        <div className="flex justify-between mx-12">
                            <p>DUI: </p> <p className='text-black font-thin'> {perfil.documento} </p> 
                        </div>
                    </div>
    
              
                </div> 
            </div>
        </div>
  )
}

export default PerfilFinalizado;
