import ContentBox from '../../components/@common/ContentBox/ContentBox';
import { useTheme } from '../../context/theme';
import { wrapper } from './MainPage.style';
const MainPage = () => {
  const { theme, toggleTheme } = useTheme();

  console.log({theme});
  return (
    <>
      <div css={wrapper}>MainPage</div>
      <button onClick={toggleTheme}>안녕</button>
      <ContentBox variant='content'>
        리액트 토이 프로젝트
      </ContentBox>
    </>
  );
};

export default MainPage;
