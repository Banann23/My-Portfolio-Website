import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

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

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);