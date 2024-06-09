import ContentBox from '../../components/@common/ContentBox/ContentBox';
import { wrapper } from './MainPage.style';
const MainPage = () => {
  return (
    <>
      <main css={wrapper}>MainPage</main>
      <ContentBox variant='content'>
        리액트 토이 프로젝트
      </ContentBox>
    </>
  );
};

export default MainPage;
