import { createContext, useState } from "react";

export let ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  let [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}
