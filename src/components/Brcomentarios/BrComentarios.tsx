interface BrComentarioProps {
	id: number;
	username: string;
	comentario: string;
}

function BrComentarios(props: BrComentarioProps) {
	return (
		<>
			<div className="br-item">
				<div className="row">
					<span
						className="br-avatar mr-3"
						title="Fulano da Silva"
					>
						<div className="col-auto">
							<span className="content">
								<i
									className="fas fa-user"
									aria-hidden="true"
								></i>
							</span>
						</div>
					</span>
					<div className="col">
						<p></p>
						<p className="m-0">{}</p>
					</div>
				</div>
			</div>
			<span className="br-divider"></span>
		</>
	);
}

export default BrComentarios;
