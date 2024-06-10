import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import { barWrapper, bottomwrapper, buttonWrapper, paginationWrapper } from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Pagination from './Pagination/Pagination';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';
import { useFetchData } from '../../hooks/useFetchData';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, dispatch } = useFetchData();
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(0);
  const [search, setSearch] = useState('');
  console.log({search})
  const currentMemoData = data.slice(startIdx, endIdx);

  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={barWrapper}>
        <SearchBar setSearch={setSearch}/>
        <DropDown />
      </section>
      {currentMemoData.map((data) => (
        <MemoList key={data.id} data={data} dispatch={dispatch} />
      ))}
      <section css={bottomwrapper}>
        <div css={paginationWrapper}>
          <Pagination
            totalMemo={data.length}
            setStartIdx={setStartIdx}
            setEndIdx={setEndIdx}
          />
        </div>
        <div css={buttonWrapper}>
          <Button handleBtnClick={() => navigate('/add')}>새 노트</Button>
        </div>
      </section>
    </>
  );
};

export default MainPage;
