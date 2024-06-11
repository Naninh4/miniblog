import { useForm } from "react-hook-form";
import Botao from "../../../components/Botao/button.tsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CharactersServices from "../../../services/CharactersServices.ts";

const schema = yup.object().shape({
	idPost: yup.string(),
	mensagem: yup.string().required("Escreva uma mensagem").max(500),
});

export default function InputComent(props: { idPost: string }) {
	const { idPost } = props;
	const { handleSubmit, register } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data: { publicacao: string; mensagem: string }) {
		data.publicacao = idPost;
		console.log(data);

		CharactersServices.postComentario(data)
			.then((response) => setUser(response.data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="col-12 mb-3">
					<div className="br-input input-highlight">
						<input
							id="mensagem"
							type="text"
							placeholder={"Fala algo sobre a publicação"}
							{...register("mensagem")}
						/>
						<Botao
							icon={"fas fa-share"}
							className={"br-button"}
							label={"Comentar"}
						/>
					</div>
				</div>
			</form>
		</>
	);
}
