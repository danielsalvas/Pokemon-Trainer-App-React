import PerfilFinalizado from "./PerfilFinalizado"

const Perfil = ({perfil, image, isValidPokemons, cargandoPerfil}) => {

    const {nombre, pasatiempo, edad, documento} = perfil;

    //Calcula la edad a partir del valor fecha ingresado

    let nuevaFecha = new Date(edad)
    let year = Number(nuevaFecha.getFullYear());
    let actual = new Date();
    let getActual = Number(actual.getFullYear());
    let nuevaEdad = getActual - year;

  return (

    <>

      {isValidPokemons ? (
          <> 
            {cargandoPerfil ? ''
              :
             <>
               <PerfilFinalizado />
             </>
            }
          </>
        ) : (
            <div className='md:w-1/2 lg:w-1/2 md:h-screen my-20'>
            <div className="mx-10">
              <p className='text-blue text-4xl font-bold'>¡Ya casi terminamos!</p>
              <p className="m-3">Revisa tu información, podrás editarla más adelante.</p>
            </div>
    
    
            <div className='flex justify-center text-center'>
                <div className='bg-orange w-96 h-[32rem] flex-col rounded-xl my-14'>
    
                    <div className="my-7">
                        <h1 className="font-bold text-3xl">{nombre}</h1>
                    </div>
    
                    <div className='w-64 h-64 bg-gray-200 rounded-full mx-auto border-white border-8'
                    style={{background: image ? `url('${image}') no-repeat center/cover` : ''}}
                    >
                    </div>
    
                    <div className='my-7 font-bold text-blue text-xl'>
                        <div className="flex justify-between mx-12">
                            <p>Pasatiempo: </p> <p className='text-black font-thin'> {pasatiempo} </p> 
                        </div>
                        <div className="flex justify-between mx-12">
                            <p>Edad: </p> <p className='text-black font-thin'> {nuevaEdad} Años</p> 
                        </div>
                        <div className="flex justify-between mx-12">
                            <p>DUI: </p> <p className='text-black font-thin'> {documento} </p> 
                        </div>
                    </div>
    
              
                </div> 
            </div>
        </div>
        )   
      }
      
      
    </>

  )
}

export default Perfil
