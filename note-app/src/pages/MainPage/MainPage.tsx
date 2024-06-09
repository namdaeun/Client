import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import { barWrapper } from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';
import { useFetchData } from '../../hooks/useFetchData';
import { timeSince } from '../../utils/date';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, dispatch } = useFetchData();

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
      {
        data.map(d => {
          return <MemoList key={d.id} date={timeSince(d.date)} id={d.id}>{d.title}</MemoList>
        })
      }
      <Button handleBtnClick={handleBtnClick}>새 노트</Button>
    </>
  );
};

export default MainPage;
