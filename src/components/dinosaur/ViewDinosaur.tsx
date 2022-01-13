import { Dinosaur } from '../../models/Dinosaur'

interface Props {
	dino: Dinosaur;
}


const ViewDinosaur = ({ dino }: Props) => (
	<div>
		<h3> {dino.name} </h3>
		I have {dino.horns} horns!
	</div>
)

export default ViewDinosaur
