import { createContext } from "react";
import { theme } from "./Theme";

interface ThemeContextProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
