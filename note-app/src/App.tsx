import { css } from '@emotion/react';
import Router from './Router';
import { themeProps, useTheme } from './context/theme';

const wrapper = (theme: themeProps) => css`
  width: 100%;
  height: 100vh;

  background-image: url(${theme.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  const {theme} = useTheme();

  return (
    <div css={wrapper(theme)}>
      <Router />
    </div>
  );
}

export default App;
