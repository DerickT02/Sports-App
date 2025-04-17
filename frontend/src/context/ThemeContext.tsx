// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of our theme context
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Create the context with a default (won't be used directly)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default to light
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark';
  });

  // Whenever isDark changes, persist and update document class
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(d => !d);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming
export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};

