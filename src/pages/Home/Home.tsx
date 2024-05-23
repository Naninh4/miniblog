import { useEffect, useState } from "react";
import BrPost from "../../components/BrPostagem/BrPostagem.tsx";
import CharacterServices from "../../services/CharactersServices.ts";

function home() {
	const [postagens, setPostagens] = useState<any[]>([]);

	function RequestGet() {
		// caso a requisição GET seja enviada then() ou faça alguma coisa (que será passada dentro do then).
		CharacterServices.listarPostagens()
			.then((res) => {
				const { data } = res;
				setPostagens(data.results);
				console.log(data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		console.log("Carregou");
		RequestGet();
	}, []);

	return (
		<>
			<section className="container">
				{postagens.map((postagem) => {
					return (
						<BrPost
							key={postagem.id}
							postagem={postagem}
						/>
					);
				})}
			</section>
		</>
	);
}

export default home;
