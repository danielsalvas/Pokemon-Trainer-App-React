import { useState } from "react"
import Mensaje from "./Mensaje";

const FotoPerfil = ({image,setImage, editarPerfil}) => {

  const [mensaje, setMensaje] = useState('')

  const handleImage = (e) => {

    const seleccionado = e.target.files[0]
    const tiposPermitidos = ["image/png", "image/jpeg", "image/jpg"];
    if (seleccionado && tiposPermitidos.includes(seleccionado.type)) {
      let reader = new FileReader();
      reader.onloadend = ( ) => {
        setImage(reader.result)
      }
      reader.readAsDataURL(seleccionado)
    } else {
      setMensaje('Tipo de archivo no soportado')
      setTimeout(() => {
        setMensaje('')
      }, 4000);
    }
  }

  return (
    <div className='md:w-1/2 my-20'>
        <div className="mx-10 md:text-left text-center">
          <p className='text-blue text-4xl font-bold'>
            { editarPerfil.nombre ? '¡Hola de nuevo! Editemos tu perfil'
              : '¡Hola! Configuremos tu perfil'
            }
          </p>
          <p className="m-3">Queremos conocerte mejor</p>
        </div>

        <div>
            {mensaje && <Mensaje> {mensaje} </Mensaje>}
        </div>

        <div className='flex justify-center text-center'>
            <div className='bg-orange w-96 h-[32rem] flex-col rounded-3xl my-10'>

                <div className="my-10">
                    <h1 className="font-bold text-3xl">Imágen de Perfil*</h1>
                </div>

                <div className='w-64 h-64 bg-gray-200 rounded-full mx-auto  border-white border-8'
                style={{background: image ? `url('${image}') no-repeat center/cover` : ''}}
                >
                </div>

                <div>
                    {!image && (
                      <div className="mt-10 bg-gray-200 rounded-2xl m-10 border-dashed border-2 border-indigo-600">
                        <label htmlFor="fileUpload" className="cursor-pointer">
                            <p className='text-sm m-5 cursor-pointer'>Adjunta una foto <span>JPG, JPEG O PNG</span></p>
                         </label>
                      </div>
                    )}
                      
                    <input 
                      type="file"
                      id='fileUpload'
                      onChange={handleImage}
                      className='hidden'
                    />
                </div>

              {image && (
                  <button className="my-10 p-5 bg-gray-200 rounded-3xl border-dashed border-2 border-red-600" 
                  onClick={ () => setImage()}>Quitar Imagen
                  </button>
              )}
            </div> 
        </div>
    </div>
  )
}

export default FotoPerfil
