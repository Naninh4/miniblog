import { useState } from "react";
import BrPost from "../../components/BrPostagem/BrPostagem.tsx";
import CharacterServices from "../../services/CharactersServices.ts";

function home() {
	const [postagens, setPostagens] = useState<any[]>([]);

	function RequestGet() {
		// caso a requisição GET seja enviada then() ou faça alguma coisa (que será passada dentro do then).
		CharacterServices.listarPostagens()
			.then((res) => {
				const { data } = res;
				setPostagens(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
			<section className="container">
				{postagens.map((postagem) => {
					return (
						<>
							<BrPost desc={postagem.descricao} />
						</>
					);
				})}
			</section>
		</>
	);
}

export default home;
