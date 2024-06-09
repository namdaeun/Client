import { css } from '@emotion/react';
import Router from './Router';
import { themeProps, useTheme } from './context/theme';
import ContentBox from './components/ContentBox/ContentBox';
import { BoxHeader } from './components/BoxHeader/BoxHeader';

const wrapper = (theme: themeProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-image: url(${theme.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  const { theme } = useTheme();

  return (
    <div css={wrapper(theme)}>
      <ContentBox variant='default'>
        <BoxHeader />
        <Router />
      </ContentBox>
    </div>
  );
}

export default App;
