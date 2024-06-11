import Botao from "../../../components/Botao/button.tsx";
import BrComentarios from "../Detalhes";
import CharacterServices from "../../../services/CharactersServices.ts";
import { useEffect, useState } from "react";
import InputComent from "../Cadastrar/index.tsx";

export default function ListComentarios(props: { idPost: number }) {
	const { idPost } = props;

	// atualiza os comentários
	const [comentarios, setComentarios] = useState<any[]>([]);

	// muda o icone do collapse quando ele é expandido ou retraido.
	const [classIcon, setclassIcon] = useState<string>("fas fa-chevron-up");

	const [active, setActive] = useState(false);

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
		getComentarios(idPost);
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
									user={comentario.autor.username}
									comentario={comentario}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
