import React, { useState } from 'react';

export const ThemeContext = React.createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: any) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const theme = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}