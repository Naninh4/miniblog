import "./Botao.css";

// extensão para arquivos que definem componentes
export default function Botao(props: {
	action?: any;
	icon?: string;
	className?: string;
	label?: string;
	type?: string;
}) {
	// ta vermelho pq não definimos o tipo das props

	// por padrão todo componente recebe uma props (propriedade)
	// decompondo um objeto
	const { action, icon, className, label, type } = props;
	return (
		<button
			onClick={action}
			className={className}
			type={type}
		>
			<i className={icon}></i>
			{label}
		</button>
	);
}

Botao;
// peritindo que ele seja exportado ou utilizado em outras telas.
