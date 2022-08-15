import ProgressBar from "./ProgressBar";

const Skill = ({nombre, porcentaje}) => {
  return (
    <div className="flex justify-between lg:w-3/4">
        <div className="skill">
                <p><span className=""></span>{`${nombre}`}</p>
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
