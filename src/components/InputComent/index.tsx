import Botao from "../Botao/button";

export default function InputComent(props: {
	icon?: string;
	type?: string;
	classButton?: string;
	label: string;
	action: any;
}) {
	const { icon, type, classButton, action } = props;
	return (
		<>
			<div className="col-12">
				<div className="br-input input-highlight">
					<label className="sr-only">Label / Rótulo</label>
					<input
						type={type}
						placeholder="Placeholder"
					/>
					<Botao
						className={classButton}
						icon={icon}
						action={action}
					/>
				</div>
			</div>
		</>
	);
}
