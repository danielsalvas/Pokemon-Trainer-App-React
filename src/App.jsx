import { useState } from 'react'
import Header from './components/Header'
import FotoPerfil from './components/FotoPerfil'
import Form from './components/Form'

function App() {

  const [isValidForm, setIsValidForm] = useState(false)

  return (
    <div className=''>
      <Header />
        <div className="font-Poppins bg-gray-100">
          
          <div className="md:flex">
              <FotoPerfil 
          
              />
              <Form 
                isValidForm={isValidForm}
                setIsValidForm={setIsValidForm}
              />

              
          </div>
        </div>
  </div>
  )
}

export default App
