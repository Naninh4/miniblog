function BrComentarios(props: { comentario: any; user: any }) {
	const { comentario, user } = props;
	return (
		<>
			<div className="row d-flex justify-content-center">
				<span
					className="br-avatar"
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
				<div className="col-10 mt-2">
					<p className="m-0 p-0">
						<b>@{user}</b>
					</p>
					<p className="m-0">{comentario.mensagem}</p>
				</div>
			</div>

			<span className="br-divider"></span>
		</>
	);
}

export default BrComentarios;
