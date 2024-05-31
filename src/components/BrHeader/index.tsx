import marcagrafica from "../../assets/logos/marcagrafica-mini.png";
import govbr from "../../assets/logos/gov-header.png";
import { Link } from "react-router-dom";

function BrHeader() {
	return (
		<>
			<header className="br-header">
				<div className="container-lg">
					<div className="header-top">
						<div className="header-logo">
							<img
								src={marcagrafica}
								alt="logo"
							/>
							<span className="br-divider vertical"></span>
							<div className="header-sign">
								<img
									src={govbr}
									alt=""
								/>
							</div>
						</div>
						<div className="header-actions">
							<div className="header-links dropdown">
								<button
									className="br-button circle small"
									type="button"
									data-toggle="dropdown"
									aria-label="Abrir Acesso Rápido"
								>
									<i
										className="fas fa-ellipsis-v"
										aria-hidden="true"
									></i>
								</button>
								<div className="br-list">
									<div className="header">
										<div className="title">
											Acesso Rápido
										</div>
									</div>
									<Link
										to="/"
										className="br-item"
									>
										Minhas Publicações
									</Link>

									<Link
										to="/"
										className="br-item"
									>
										Publicar
									</Link>
									<Link
										to="/"
										className="br-item"
									>
										Início
									</Link>
								</div>
							</div>
							<span className="br-divider vertical mx-half mx-sm-1"></span>
							<div className="header-functions dropdown">
								<button
									className="br-button circle small"
									type="button"
									data-toggle="dropdown"
									aria-label="Abrir Funcionalidades do Sistema"
								>
									<i
										className="fas fa-th"
										aria-hidden="true"
									></i>
								</button>
								<div className="br-list">
									<div className="header">
										<div className="title">
											Funcionalidades do Sistema
										</div>
									</div>
									<div className="br-item">
										<button
											className="br-button circle small"
											type="button"
											aria-label="Funcionalidade 1"
										>
											<i
												className="fas fa-chart-bar"
												aria-hidden="true"
											></i>
											<span className="text">
												Funcionalidade 1
											</span>
										</button>
									</div>
									<div className="br-item">
										<button
											className="br-button circle small"
											type="button"
											aria-label="Funcionalidade 2"
										>
											<i
												className="fas fa-headset"
												aria-hidden="true"
											></i>
											<span className="text">
												Funcionalidade 2
											</span>
										</button>
									</div>
									<div className="br-item">
										<button
											className="br-button circle small"
											type="button"
											aria-label="Funcionalidade 3"
										>
											<i
												className="fas fa-comment"
												aria-hidden="true"
											></i>
											<span className="text">
												Funcionalidade 3
											</span>
										</button>
									</div>
									<div className="br-item">
										<button
											className="br-button circle small"
											type="button"
											aria-label="Funcionalidade 4"
										>
											<i
												className="fas fa-adjust"
												aria-hidden="true"
											></i>
											<span className="text">
												Funcionalidade 4
											</span>
										</button>
									</div>
								</div>
							</div>
							<div className="header-search-trigger">
								<button
									className="br-button circle"
									type="button"
									aria-label="Abrir Busca"
									data-toggle="search"
									data-target=".header-search"
								>
									<i
										className="fas fa-search"
										aria-hidden="true"
									></i>
								</button>
							</div>
							<div className="header-login">
								<div className="header-sign-in">
									<Link
										to="/login/"
										className="br-sign-in small"
									>
										<i
											className="fas fa-user"
											aria-hidden="true"
										></i>
										<span className="d-sm-inline">
											Entrar
										</span>
									</Link>
								</div>
								<div className="header-avatar"></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
export default BrHeader;
