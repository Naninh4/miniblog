// extensão para arquivos que definem componentes
function Botao(props: { action: any; label: any; className: any }) {
	// ta vermelho pq não definimos o tipo das props

	// por padrão todo componente recebe uma props (propriedade)
	// decompondo um objeto
	const { action, label, className } = props;
	return (
		<button
			onClick={action}
			className={className}
		>
			{label}
		</button>
	);
}

export default Botao;
// peritindo que ele seja exportado ou utilizado em outras telas.
