import { useState, useEffect } from 'react'
import Header from './components/Header'
import FotoPerfil from './components/FotoPerfil'
import Form from './components/Form'
import ChoosePokemon from './components/ChoosePokemon'
import Spinner from './components/Spinner'
import Perfil from './components/Perfil'

function App() {

  const [image, setImage] = useState(null);
  const [isValidForm, setIsValidForm] = useState(false)
  const [cargando,setCargando] = useState(false)
  const [perfil, setPerfil] = useState({})
  const [guardarPokemons, setGuardarPokemons] = useState([])
  const [isValidPokemons, setIsValidPokemons] = useState(false)
  const [cargandoPerfil, setCargandoPerfil] = useState(false)
  const [editarPerfil, setEditarPerfil] = useState({})

  useEffect(() => {
    if (Object.keys(editarPerfil).length > 0) {
      setIsValidForm(false)
    }
  }, [editarPerfil])
  
  
  return (
    <div>
      <div className='flex md:justify-start justify-center'>
        <Header />
      </div>
        
        <div className="font-Poppins">
          
          <div className="md:flex bg-gray-100 p-1">
                  
              {isValidForm ? (
                <>
                  {cargando ? <Spinner /> :
                    <>
                      <Perfil 
                        perfil={perfil}
                        image={image}
                        isValidPokemons={isValidPokemons}
                        cargandoPerfil={cargandoPerfil}
                        editarPerfil={editarPerfil}
                        setEditarPerfil={setEditarPerfil}
                      />
                      <ChoosePokemon
                        setGuardarPokemons={setGuardarPokemons}
                        guardarPokemons={guardarPokemons}
                        setIsValidPokemons={setIsValidPokemons}
                        isValidPokemons={isValidPokemons}
                        setCargandoPerfil={setCargandoPerfil}
                        cargandoPerfil={cargandoPerfil}
                      /> 
                    </>
                  }
                </>    
              ) : (
                <>
                  <FotoPerfil 
                    image={image}
                    setImage={setImage}
                    editarPerfil={editarPerfil}
                  />
                  <Form 
                    isValidForm={isValidForm}
                    setIsValidForm={setIsValidForm}
                    cargando={cargando}
                    setCargando={setCargando}
                    setPerfil={setPerfil}
                    image={image}
                    editarPerfil={editarPerfil}
                  />
                </>
              )}
          </div>
        </div>
  </div>
  )
}


export default App
