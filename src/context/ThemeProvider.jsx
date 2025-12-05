import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [lightMode, setLightMode] = useState(
        () => localStorage.getItem("lightmode") === "enabled"
    );

    useEffect(() => {
        if (lightMode) {
            document.body.classList.add("lightMode");
        }
        else document.body.classList.remove("lightMode");
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ lightMode, setLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);