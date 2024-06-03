import { string } from "yup";
import Botao from "../../../components/Botao/button.tsx";

const data = {
	publicacao: string,
	mensagem: string,
};

export default function InputComent(props: {
	icon?: string;
	place: string;
	classButton?: string;
	label: string;
	action: any;
	data: data;
}) {
	const { icon, place, classButton, action, label } = props;
	return (
		<>
			<div className="col-12 mb-3">
				<div className="br-input input-highlight">
					<input
						id="input-highlight-labeless"
						type="text"
						placeholder={place}
					/>
					<Botao
						icon={icon}
						action={action}
						className={classButton}
						label={label}
					/>
				</div>
			</div>
		</>
	);
}
