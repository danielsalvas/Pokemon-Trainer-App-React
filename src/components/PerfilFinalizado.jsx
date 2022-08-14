import React from 'react'
import medalla from '../img/medalla.png'

const primerNombre = (nombre) => {
    
    let result = nombre.split(' ')
    let final = result[0]
    console.log(final);
    return final
}

const PerfilFinalizado = ({perfil, image, nuevaEdad}) => {
  return (
    <div className='md:w-1/2 lg:w-1/2 md:h-screen my-20'>
            <div className="mx-10">
              <p className='text-blue text-4xl font-bold'>¡Hola! {primerNombre(perfil.nombre)}</p>
              <p className="m-3">Te damos la bienvenida a tu perfil entrenador</p>
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
