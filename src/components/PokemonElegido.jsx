import ProgressBar from "./ProgressBar"
import Skill from "./Skill";

const PokemonElegido = ({
    id, image, name, types,
    hp, ataque, defensa,
    ataqueEspecial, defensaEspecial,
    velocidad
}) => {

    let porcentajeHp = parseInt((hp/255)*100);
    let porcentajeAtaque = parseInt((ataque/190)*100);
    let porcentajeDefensa = parseInt((defensa/230)*100);
    let porcentajeAtaqueEspecial = parseInt((ataqueEspecial/194)*100);
    let porcentajeDefensaEspecial = parseInt((defensaEspecial/230)*100);
    let porcentajeVelocidad = parseInt((velocidad/180)*100);

    let skills = [
        {porcentaje: porcentajeHp, nombre: 'HP'},
        {porcentaje: porcentajeAtaque, nombre: 'Ataque'},
        {porcentaje: porcentajeDefensa, nombre: 'Defensa'},
        {porcentaje: porcentajeAtaqueEspecial, nombre: 'Ataque Especial'},
        {porcentaje: porcentajeDefensaEspecial, nombre: 'Defensa Especial'},
        {porcentaje: porcentajeVelocidad, nombre: 'Velocidad'},
    ]

  return (
    <div className='bg-gray-200 p-1 rounded-3xl md:flex my-5'>
        <div className='md:w-1/4 m-5 text-center'>
            <div>
                <img src={image} alt={name} className='h-36 mx-auto'/>
            </div>
            <div className='my-3 text-black'>
                    <p className='font-bold lg:text-2xl text-lg'> {name.toUpperCase()} </p> 
                    <p className='lg:text-lg text-base'>{types.toUpperCase()}</p>
            </div>
        </div>

        <div className="md:w-3/4 grid grid-cols-1 gap-4 my-8 ">
        {skills.map( (skill) => (
              <>
                <Skill
                    porcentaje={skill.porcentaje}
                    nombre={skill.nombre}
                />     
              </> 
            ))} 
        </div>
    </div>
  )
}

export default PokemonElegido
