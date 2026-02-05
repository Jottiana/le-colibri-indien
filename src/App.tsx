import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Valentine from "./pages/Valentine/Valentine";
import ValentineRevealed from "./pages/ValentineRevealed/ValentineRevealed";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/valentine" element={<Valentine />} />
				<Route path="/valentine/revealed" element={<ValentineRevealed />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
