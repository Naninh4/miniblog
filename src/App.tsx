import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrHeader } from "./components";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";

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
					<Route
						path="/login/"
						element={<Login />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
