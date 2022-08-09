

import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'

const Form = ({isValidForm, setIsValidForm, cargando, setCargando}) => {

  const [nombre, setNombre] = useState('');
  const [pasatiempo, setPasatiempo] = useState('');
  const [edad, setEdad] = useState('');
  const [documento, setDocumento] = useState('');

  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();

      //Validación de formulario

      if ([nombre, edad, documento].includes('')) {
          setMensaje('Los campos con * son obligatorios')

          setTimeout(() => {
            setMensaje('')
          }, 4000);
          return
      } else {
      
        setIsValidForm(true)
        
      }

      setCargando(true)

        setTimeout(() => {
      setCargando(false)
        }, 3000);
      
      //Objeto que almacena datos de paciente 

      
      //Reiniciar el FORM

      setNombre('')
      setPasatiempo('')
      setEdad('')
      setDocumento('')
      
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5 my-auto">
        <h2 className="text-3xl text-blue">Tu información</h2>
        <p className="text-lg mt-5 ">Completa la siguiente información
        <span className='text-blue font-bold'> para completar tu perfil.</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className=' rounded-lg py-10 px-5 mb-16 mx-auto'>
            
            {/* Agrega mensaje de error si todos los campos están vacíos */}
            {mensaje && <Mensaje> {mensaje} </Mensaje>}

            <div className="mb-5">
              <label htmlFor='nombre' className="block text-gray uppercase font-bold">
                Nombre Completo*
                </label>
              <input 
                  id="nombre"
                  type="text"
                  placeholder="Nombre Completo del Trainer" 
                  className="border-2 w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md"
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
                    className="border-2 w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md text-blue "
                >
                    <option value="">Seleccione Pasatiempo</option>
                    <option value="futbol">Jugar Fútbol</option>
                    <option value="basketball">Jugar Basquetball</option>
                    <option value="tennis">Jugar Tennis</option>
                    <option value="volleyball">Jugar Volleyball</option>
                    <option value="natacion">Natación</option>
                    <option value="gimnasio">Gimnasio</option>
                    <option value="fifa">Jugar FIFA</option>
                    <option value="videojuegos">Jugar Videojuegos</option>
                    <option value="series">Ver series</option>
                </select>
            </div>

            <div className="mb-5">
              <label htmlFor='edad' className="block text-gray uppercase font-bold">
                Cumpleaños*
                </label>
              <input 
                  id="edad"
                  type="date"
                  onFocus={e=> e.type='date'}
                  placeholder="Cumpleaños*" 
                  className="border-2 w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md"
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
                  className="border-2 w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={documento}
                  onChange={ (e) => setDocumento(e.target.value) }
                  pattern="[0-9]{9}" 
                  title="Debe poner 9 números sin guión"
              />

            </div>

            <input 
                value='ENVIAR PERFIL'
                type="submit" 
                className='bg-indigo-600 w-1/2 p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
            />
        </form>
    </div>
  )
}

export default Form;
