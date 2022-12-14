

import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'

const Form = ({
  isValidForm, setIsValidForm, 
  cargando, setCargando, 
  setPerfil, image, 
  editarPerfil
}) => {

  const [nombre, setNombre] = useState('');
  const [pasatiempo, setPasatiempo] = useState('');
  const [edad, setEdad] = useState('');
  const [documento, setDocumento] = useState('');

  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    if (Object.keys(editarPerfil).length > 0) {
      setNombre(editarPerfil.nombre)
      setPasatiempo(editarPerfil.pasatiempo)
      setEdad(editarPerfil.edad)
      setDocumento(editarPerfil.documento)
    }
  }, [])
  
  const handleSubmit = (e) => {
      e.preventDefault();

      //Validación de formulario

      if ([nombre, edad, documento].includes('') || image===null) {
          setMensaje('Los campos con * son obligatorios')

          setTimeout(() => {
            setMensaje('')
          }, 4000);
          return
      } else {
      
        setIsValidForm(true)
        setPerfil({nombre, pasatiempo, edad, documento})
      }

      setCargando(true)

        setTimeout(() => {
          setCargando(false)
        }, 3000);
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5 sm:my-32">
        {/* Agrega mensaje de error si todos los campos están vacíos */}
        {mensaje && <Mensaje> {mensaje} </Mensaje>}
        <div className='md:text-left text-center'>
          <h2 className="text-3xl text-blue">Tu información</h2>
          <p className="text-lg mt-5 ">Completa la siguiente información
          <span className='text-blue font-bold'> para completar tu perfil.</span>
          </p>
        </div>

        <form 
            onSubmit={handleSubmit}
            className=' rounded-lg py-10 px-5 mb-16 mx-auto'>

            <div className="mb-5">
              <label htmlFor='nombre' className="block text-gray uppercase font-bold">
                Nombre Completo*
                </label>
              <input 
                  id="nombre"
                  type="text"
                  placeholder="Nombre Completo del Trainer" 
                  className="border-2 lg:w-3/4 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor='pasatiempo' className="block text-gray uppercase font-bold">
                Pasatiempo Favorito
                </label>
                <select 
                    id="pasatiempo"
                    value={pasatiempo}
                    onChange= {e => setPasatiempo(e.target.value)}
                    className="border-2 lg:w-3/4 w-full p-2 mt-2 placeholder-gray-400 rounded-xl text-blue "
                >
                    <option value="">Seleccione Pasatiempo</option>
                    <option value="Fútbol">Jugar Fútbol</option>
                    <option value="Basketball">Jugar Basquetball</option>
                    <option value="Tennis">Jugar Tennis</option>
                    <option value="Volleyball">Jugar Volleyball</option>
                    <option value="Natación">Natación</option>
                    <option value="Ir al Gimnasio">Gimnasio</option>
                    <option value="Jugar FIFA">Jugar FIFA</option>
                    <option value="Videojuegos">Jugar Videojuegos</option>
                    <option value="Ver Series">Ver series</option>
                </select>
            </div>

            <div className="mb-5">
              <label htmlFor='edad' className="block text-gray uppercase font-bold">
                Cumpleaños* MAYOR 18 AÑOS
                </label>
              <input 
                  id="edad"
                  type="date"
                  max='2004-08-09'
                  placeholder="Cumpleaños*" 
                  className="border-2 lg:w-3/4 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
                  value={edad}
                  onChange={ (e) => setEdad(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor='documento' className="block text-gray uppercase font-bold">
                DUI (SIN GUIÓN)*
                </label>
              <input 
                  id="documento"
                  type="text"
                  placeholder="Documento Único de Identidad"
                  className="border-2 lg:w-3/4 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
                  value={documento}
                  onChange={ (e) => setDocumento(e.target.value) }
                  pattern="[0-9]{9}" 
                  title="Debe poner 9 números sin guión"
              />

            </div>

            <input 
                value={ editarPerfil.nombre ? 'Guardar Cambios'
                : 'Enviar Perfil'
                }
                type="submit" 
                className='rounded-3xl bg-indigo-600 w-1/2 p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
            />
        </form>
    </div>
  )
}

export default Form;
