import ProgressBar from "./ProgressBar";


const Skill = ({nombre, porcentaje}) => {
  return (
    <div className="flex justify-between">
        <div className="skill">
                <p><span className="lista"></span>{`${nombre}`}</p>
        </div>

        <div className="barra">
            <ProgressBar 
                porcentaje={porcentaje}
            />
        </div>
    </div>
  )
}

export default Skill;
