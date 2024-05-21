import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrHeader } from "./components";
import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<BrHeader />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
