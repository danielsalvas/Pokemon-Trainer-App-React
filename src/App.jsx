import { useState } from 'react'
import Header from './components/Header'
import FotoPerfil from './components/FotoPerfil'
import Form from './components/Form'
import ChoosePokemon from './components/ChoosePokemon'
import Spinner from './components/Spinner'

function App() {

  const [isValidForm, setIsValidForm] = useState(false)
  const [cargando,setCargando] = useState(false)


  return (
    <div className=''>
      <Header />
        <div className="font-Poppins bg-gray-100">
          
          <div className="md:flex">
              
              
              {isValidForm ? (
                <>
                  {cargando ? <Spinner /> :
                    <>
                      <FotoPerfil />
                      <ChoosePokemon /> 
                    </>
                  }
                </>    
              ) : (
                <>
                  <FotoPerfil 
          
                  />
                  <Form 
                    isValidForm={isValidForm}
                    setIsValidForm={setIsValidForm}
                    cargando={cargando}
                    setCargando={setCargando}
                  />
                </>
              )}
          </div>
        </div>
  </div>
  )
}


export default App
