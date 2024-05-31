import ListagemPostagem from "../../Features/Postagem/Listagem";

function home() {
	return (
		<>
			<section className="container">
				<ListagemPostagem />
			</section>
		</>
	);
}

export default home;
