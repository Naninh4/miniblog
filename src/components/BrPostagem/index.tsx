import { useEffect, useState } from "react";
import BrComentarios from "./Comentarios/index.tsx";
import CharacterServices from "../../services/CharactersServices.ts";
import Botao from "../Botao/button.tsx";
import Input from "../InputComent/index.tsx";

export default function BrPostagem(props: { postagem: any }) {
	// decompoe as props passadas para o componen de postagem
	const { postagem } = props;
	// atualiza os comentários
	const [comentarios, setComentarios] = useState<any[]>([]);

	// identifica e muda o estado do collapse para aberto ou fechado
	const [active, setActive] = useState(false);

	// muda o icone do collapse quando ele é expandido ou retraido.
	const [classIcon, setclassIcon] = useState<string>("fas fa-chevron-up");

	function comentar() {}

	function getComentarios(id: number) {
		// caso a requisição GET seja enviada then() ou faça alguma coisa (que será passada dentro do then).
		CharacterServices.publiComentarios(id)
			.then((res) => {
				const { data } = res;

				setComentarios(data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		getComentarios(postagem.id);
	}, []);

	function toCollapse() {
		setActive(!active);
		if (active) {
			setclassIcon("fas fa-chevron-up");
		} else {
			setclassIcon("fas fa-chevron-down");
		}
	}

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
							<div className="ml-auto ">
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
								className="br-item "
								role="listitem"
								data-toggle="accordion"
								data-target="a-l1"
								data-group="group1"
								style={{ borderRadius: "5px" }}
							>
								<div
									className="content"
									onClick={toCollapse}
								>
									<div className="flex-fill">
										<p
											style={{
												color: "#0C326F",
												margin: "0px",
											}}
										>
											<b>Comentários</b>
										</p>
									</div>
									<Botao
										action={toCollapse}
										className={"br-button circle"}
										icon={classIcon}
									></Botao>
								</div>
							</div>
							<div hidden={active}>
								<div role="listitem">
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
						<Input
							icon="fas fa-share"
							type={"text"}
							classButton={"br-button"}
							action={comentar()}
							label={"comentar"}
						/>
					</div>
				</div>
			</div>
			;
		</>
	);
}
