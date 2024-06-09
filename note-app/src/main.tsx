import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global, ThemeProvider } from '@emotion/react';
import { Theme } from './styles/theme.ts';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { ThemeModeProvider } from './context/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={Theme}>
      <ThemeModeProvider>
        <Global styles={GlobalStyle} />
        <App />
      </ThemeModeProvider>
    </ThemeProvider>
  </>,
);
