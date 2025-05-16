import React, { ReactNode } from 'react';
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}
export declare const ThemeProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useTheme: () => ThemeContextType;
export {};
