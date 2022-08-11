import { useState } from 'react'
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
  

  return (
    <div className=''>
      <Header />
        <div className="font-Poppins bg-gray-100">
          
          <div className="md:flex">
                  
              {isValidForm ? (
                <>
                  {cargando ? <Spinner /> :
                    <>
                      <Perfil 
                        perfil={perfil}
                        image={image}
                      />
                      <ChoosePokemon
                        setGuardarPokemons={setGuardarPokemons}
                        guardarPokemons={guardarPokemons}
                        setCargando={setCargando}
                      /> 
                    </>
                  }
                </>    
              ) : (
                <>
                  <FotoPerfil 
                    image={image}
                    setImage={setImage}
                  />
                  <Form 
                    isValidForm={isValidForm}
                    setIsValidForm={setIsValidForm}
                    cargando={cargando}
                    setCargando={setCargando}
                    setPerfil={setPerfil}
                  />
                </>
              )}
          </div>
        </div>
  </div>
  )
}


export default App
