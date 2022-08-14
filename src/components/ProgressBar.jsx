import { useState } from "react";
import '../index.css'

const ProgressBar = ({porcentaje}) => {

    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${porcentaje}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{porcentaje}%
			</div>
		</div>
	)
}

export default ProgressBar