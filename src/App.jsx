import { useState, useEffect } from 'react'
import Header from './components/Header'
import FotoPerfil from './components/FotoPerfil'
import Form from './components/Form'
import ChoosePokemon from './components/ChoosePokemon'
import Spinner from './components/Spinner'
import Perfil from './components/Perfil'

function App() {

  const [image, setImage] = useState(
    localStorage.getItem('image') ?? ''  //Estado de imagen en LocalStorage
  )
  const [perfil, setPerfil] = useState(
    localStorage.getItem('perfil') ? JSON.parse(localStorage.getItem('perfil')) : {} //Información de perfil en un arreglo
  )
  const [guardarPokemons, setGuardarPokemons] = useState(
    localStorage.getItem('guardarPokemons') ? JSON.parse(localStorage.getItem('guardarPokemons')): [] //Arreglo de objetos de Pokemon escogidos
  )

  const [isValidForm, setIsValidForm] = useState(false) //Ayuda a pasar al componente de ChoosePokemon y Perfil
  const [cargando,setCargando] = useState(false) //Ayuda a colocar el Spinner de Pokebola
  const [isValidPokemons, setIsValidPokemons] = useState(false) //Ayuda a pasar al componente de Equipo Pokemon y Perfil Finalizado
  const [cargandoPerfil, setCargandoPerfil] = useState(false) //Ayuda a cargar el segundo Spinner de Pokebola
  const [editarPerfil, setEditarPerfil] = useState({}) //Ayuda a almacenar datos de perfil para editarlos

  //LocalStorage

  useEffect(() => {
    localStorage.setItem('image', image ?? null)
  }, [image])

  useEffect(() => {
    localStorage.setItem('perfil', JSON.stringify(perfil) ?? {})
  }, [perfil])

  useEffect(() => {
    localStorage.setItem('guardarPokemons', JSON.stringify(guardarPokemons) ?? [])
  }, [guardarPokemons])

  useEffect(() => {
    const guardarPokemonsLS = JSON.parse(localStorage.getItem('guardarPokemons'));

    if (guardarPokemonsLS.length > 0) {
      setIsValidForm(true)
      setIsValidPokemons(true)
    }
  }, [])
  
  //Editando Perfil

  useEffect(() => {
    if (Object.keys(editarPerfil).length > 0) {
      setIsValidForm(false)
    }
  }, [editarPerfil])
  
  return (
    <div>
      <div>
        <div>
          <Header 
            isValidPokemons={isValidPokemons}
            setImage={setImage}
            setPerfil={setPerfil}
            setGuardarPokemons={setGuardarPokemons}
            setIsValidForm={setIsValidForm}
            setIsValidPokemons={setIsValidPokemons}
            setEditarPerfil={setEditarPerfil}
          />
        </div>
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
