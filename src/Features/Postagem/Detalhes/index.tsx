import Input from "../../../components/InputComent/index.tsx";
import ListComentarios from "../../Comentarios/Listagem/index.tsx";

export default function BrPostagem(props: { postagem: any }) {
	// decompoe as props passadas para o componen de postagem
	const { postagem } = props;

	// identifica e muda o estado do collapse para aberto ou fechado

	function comentar() {}

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
						<ListComentarios idPost={postagem.id} />
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
