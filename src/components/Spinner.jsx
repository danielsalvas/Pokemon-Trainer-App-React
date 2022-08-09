import cargando from '../img/cargando.gif'

const Spinner = () => {
  return (
    <div className=' bg-white w-full'> 
        
            <img src={cargando} alt="" className='mx-auto'/>
            <p className='text-2xl font-bold text-blue text-center'>Cargando...</p>
          
    </div>
  )
}

export default Spinner
