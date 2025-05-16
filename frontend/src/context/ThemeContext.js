import { jsx as _jsx } from "react/jsx-runtime";
// src/context/ThemeContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
// Create the context with a default (won't be used directly)
const ThemeContext = createContext(undefined);
// Provider component
export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage or default to light
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored === 'dark';
    });
    // Whenever isDark changes, persist and update document class
    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    const toggleTheme = () => setIsDark(d => !d);
    return (_jsx(ThemeContext.Provider, { value: { isDark, toggleTheme }, children: children }));
};
// Custom hook for consuming
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return ctx;
};
