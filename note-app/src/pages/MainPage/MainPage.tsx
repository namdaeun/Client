import ContentBox from '../../components/ContentBox/ContentBox';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import * as s from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {
  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={s.barWrapper}>
        <SearchBar/>
        <DropDown />
      </section>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
    </>
  );
};

export default MainPage;
