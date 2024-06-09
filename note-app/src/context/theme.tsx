import { ReactNode, createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: 'lightTheme',
  toggleTheme: () => {}
});

export const ThemeModeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState('lightTheme');

  const toggleTheme = () => {
    setTheme(prev => prev == 'lightTheme' ? 'darkTheme' : 'lightTheme');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
