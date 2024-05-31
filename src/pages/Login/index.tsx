import Banner from "../../assets/logos/Banner-vertical.png";

export default function login() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8">
						<img
							src={Banner}
							alt=""
						/>
					</div>
					<div className="col-4 shadow-sm	">
						{/* username */}

						<div className="br-input">
							<label htmlFor="input-icon">Login</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user-tie"
										aria-hidden="true"
									></i>
								</div>
								<input
									id="input-icon"
									type="text"
									placeholder="Placeholder"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
