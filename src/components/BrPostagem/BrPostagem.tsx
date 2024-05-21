import CharacterServices from "../../services/CharactersServices.ts";

function BrPostagem(props: { desc: string }) {
	const { desc } = props;

	// function GetById(id) {
	// 	// caso a requisição GET seja enviada then() ou faça alguma coisa (que será passada dentro do then).
	// 	CharacterServices.listarPostagens()
	// 		.then((res) => {
	// 			const { data } = res;
	// 			setPostagens(data);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }

	return (
		<>
			<div className="col-12">
				<div className="br-card">
					<div className="card-header">
						<div className="d-flex">
							<span
								className="br-avatar mt-1"
								title="Fulano da Silva"
							>
								<span className="content">
									<img src="https://picsum.photos/id/823/400" />
								</span>
							</span>
							<div className="ml-3">
								<div className="text-weight-semi-bold text-up-02">
									Maria Amorim
								</div>
								<div>UX Designer</div>
							</div>
							<div className="ml-auto">
								<button
									className="br-button circle"
									type="button"
									aria-label="Ícone ilustrativo"
								>
									<i
										className="fas fa-ellipsis-v"
										aria-hidden="true"
									></i>
								</button>
							</div>
						</div>
					</div>
					<div className="card-content">
						<div className="card-content">
							<img
								width={"100%"}
								src=""
								alt="Imagem de exemplo"
							/>
						</div>
						<p>{desc}</p>
					</div>
					<div className="card-footer">
						<div className="text-right">
							<button
								className="br-button circle"
								type="button"
								aria-label="Botão para expandir ou recolher conteúdos adicionais"
								data-toggle="collapse"
								data-target="expanded"
								aria-controls="expanded"
								aria-expanded="false"
								data-visible="false"
							>
								<i
									className="fas fa-chevron-down"
									aria-hidden="true"
								></i>
							</button>
						</div>
						<div id="expanded">
							<div className="br-list mt-3">
								<div className="br-item">
									<div className="row">
										<div className="col-auto">
											<i
												className="fas fa-heartbeat"
												aria-hidden="true"
											></i>
										</div>
										<div className="col">
											<p className="m-0">
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
											</p>
										</div>
									</div>
								</div>
								{/* <BrComentarios id={passa o valor da api} /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
}

export default BrPostagem;
