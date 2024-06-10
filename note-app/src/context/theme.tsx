import { ReactNode, createContext, useContext, useState } from 'react';
import darkBackground from '/src/assets/darkBackground.png';
import lightBackground from '/src/assets/lightBackground.png';

export type themeProps = {
  bgColor: string;
  textColor: string;

  point1Color: string;
  point2Color: string;

  redBorderColor: string;
  backgroundImg: string;

  switchColor: string;
};

const lightTheme = {
  bgColor: '#FFFFFF',
  textColor: '#000000',

  point1Color: '#AAABAA',
  point2Color: '#E5BEA7',

  redBorderColor: '#FC5230',
  backgroundImg: lightBackground,

  switchColor: '#595959',
};

const darkTheme = {
  bgColor: '#000000',
  textColor: '#FFFFFF',

  point1Color: '#E9A6B0',
  point2Color: '#446DA3',

  redBorderColor: '#AE3A1E',
  backgroundImg: darkBackground,
  switchColor: 'lightgray',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeProps>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
