import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import { barWrapper } from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';
import { useFetchData } from '../../hooks/useFetchData';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, dispatch } = useFetchData();

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
          return <MemoList key={d.id} data={d} dispatch={dispatch}/>
        })
      }
      <Button handleBtnClick={() => navigate('/add')}>새 노트</Button>
    </>
  );
};

export default MainPage;
