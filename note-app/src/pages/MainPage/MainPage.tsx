import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import { barWrapper } from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/add');
  }
  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={barWrapper}>
        <SearchBar/>
        <DropDown />
      </section>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
      <MemoList date='몇 초' >리액트 토이 프로젝트</MemoList>
      <Button handleBtnClick={handleBtnClick}>새 노트</Button>
    </>
  );
};

export default MainPage;
