import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import Actions from "../src/pages/Actions/Actions";
import Contact from "../src/pages/Contact/Contact";
import Event from "../src/pages/Event/Event";
import Home from "../src/pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import EventBanner from "./components/EventBanner/EventBanner";
import LegalNotice from "./pages/LegalNotice/LegalNotice";

function App() {
	return (
		<BrowserRouter>
			<EventBanner />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/actions" element={<Actions />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/event" element={<Event />} />	
				<Route path="/legalnotice" element={<LegalNotice />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
