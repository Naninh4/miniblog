// extensão para arquivos que definem componentes
export default function Botao(props: {
	action?: any;
	icon?: string;
	className?: string;
	label?: string;
}) {
	// ta vermelho pq não definimos o tipo das props

	// por padrão todo componente recebe uma props (propriedade)
	// decompondo um objeto
	const { action, icon, className, label } = props;
	return (
		<button
			onClick={action}
			className={className}
		>
			<div className={icon}>{label}</div>
		</button>
	);
}

Botao;
// peritindo que ele seja exportado ou utilizado em outras telas.
