import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import Actions from "../src/pages/Actions/Actions";
import Contact from "../src/pages/Contact/Contact";
import Home from "../src/pages/Home/Home";

import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<BrowserRouter basename="/le-colibri-indien">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/actions" element={<Actions />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
