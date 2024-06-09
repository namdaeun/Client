import ContentBox from '../../components/@common/ContentBox/ContentBox';
import * as s from './MainPage.style';
const MainPage = () => {
  return (
    <>
      <main css={s.wrapper}>
        <section css={s.header}>Jinda Note</section>
        <section css={s.quote}></section>
      </main>
      <ContentBox variant='content'>
        리액트 토이 프로젝트
      </ContentBox>
    </>
  );
};

export default MainPage;
