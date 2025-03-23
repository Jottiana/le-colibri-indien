import {
	createContext,
	useContext,
	useState,
	type ReactNode,
	useEffect,
} from "react";

type Language = "fr" | "en";
type Theme = "light" | "dark";

interface GlobalContextType {
	language: Language;
	toggleLanguage: () => void;
	theme: Theme;
	toggleTheme: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>("fr");
	const [theme, setTheme] = useState<Theme>("light");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
	};

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		document.body.className = "";
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<GlobalContext.Provider
			value={{ language, toggleLanguage, theme, toggleTheme }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (!context)
		throw new Error("useGlobalContext must be used within GlobalProvider");
	return context;
};
