import { useTheme } from '../../context/theme';
import { wrapper } from './MainPage.style';
const MainPage = () => {
  const { theme, toggleTheme } = useTheme();

  console.log({theme});
  return (
    <>
      <div css={wrapper}>MainPage</div>
      <button onClick={toggleTheme}>안녕</button>
    </>
  );
};

export default MainPage;
