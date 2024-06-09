import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Router from './Router.tsx';
import { Global, ThemeProvider } from '@emotion/react';
import { Theme } from './styles/theme.ts';
import { GlobalStyle } from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <Router />
      <App />
    </ThemeProvider>
  </>,
);
