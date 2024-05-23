import { useEffect, useState } from "react";
import BrComentarios from "../BrComentarios/BrComentarios";
import CharacterServices from "../../services/CharactersServices.ts";

function BrPostagem(props: { postagem: any }) {
	const { postagem } = props;
	const [comentarios, setComentarios] = useState<any[]>([]);

	function ComentGetById(id: number) {
		// caso a requisição GET seja enviada then() ou faça alguma coisa (que será passada dentro do then).
		CharacterServices.PubliComentarios(id)
			.then((res) => {
				const { data } = res;

				setComentarios(data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		ComentGetById(postagem.id);
	}, []);

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
									@{postagem.autor.username}
								</div>
								<div>{postagem.autor.nome}</div>
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
						{postagem.imagem === null ? (
							<br />
						) : (
							<div
								style={{
									height: "300px",
									width: "100%",
									overflow: "hidden",
								}}
								className="d-flex 
							align-items-center
							justify-content-center"
							>
								<img
									style={{ width: "100%", height: "auto" }}
									src={postagem.imagem}
									alt="Imagem de exemplo"
								/>
							</div>
						)}
						<h4>{postagem.titulo}</h4>
						<p>{postagem.descricao}</p>
					</div>
					<div className="card-footer">
						<div className="accordion-example">
							<div
								className="br-item"
								role="listitem"
								tabIndex="0"
								data-toggle="accordion"
								data-target="a-l1"
								data-group="group1"
							>
								<div className="content">
									<div className="flex-fill">
										<p style={{ color: "#0C326F" }}>
											<b>Comentários</b>
										</p>
									</div>
									<i
										className="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</div>
							</div>
							<div
								className="br-list"
								id="a-l1"
								role="list"
							>
								<div
									className=""
									role="listitem"
								>
									{comentarios.map((comentario) => {
										return (
											<BrComentarios
												key={comentario.id}
												user={postagem.autor.nome}
												comentario={comentario}
											/>
										);
									})}
								</div>
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
