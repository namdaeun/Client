import ContentBox from '../../components/ContentBox/ContentBox';
import Title from '../../components/Title/Title';
import * as s from './MainPage.style';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {
  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={s.barWrapper}>
        <SearchBar/>
        드롭 다운
      </section>
      <ContentBox variant="content">리액트 토이 프로젝트</ContentBox>
    </>
  );
};

export default MainPage;
