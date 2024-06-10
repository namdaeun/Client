import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Title from '../../components/Title/Title';
import { useFetchData } from '../../hooks/useFetchData';
import {
  barWrapper,
  bottomwrapper,
  buttonWrapper,
  mainWrapper,
  paginationWrapper,
} from './MainPage.style';
import MemoList from './MemoList/MemoList';
import Pagination from './Pagination/Pagination';
import Quote from './Quote/Quote';
import SearchBar from './SearchBar/SearchBar';
import { sortData } from '../../utils/sort';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, dispatch } = useFetchData();
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(0);
  const [search, setSearch] = useState('');
  const [filterSelect, setFilterSelect] = useState('최근생성순');

  const filteredData = sortData(data.filter(d => d.title.toLowerCase().includes(search.toLowerCase())), filterSelect);
  const currentMemoData = filteredData.slice(startIdx, endIdx);

  return (
    <main css={mainWrapper}>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={barWrapper}>
        <SearchBar setSearch={setSearch}/>
        <DropDown category={filterSelect} setCategory={setFilterSelect}/>
      </section>
      {currentMemoData.map((data) => (
        <MemoList key={data.id} data={data} dispatch={dispatch} />
      ))}
      <section css={bottomwrapper}>
        <div css={paginationWrapper}>
          <Pagination
            totalMemo={filteredData.length}
            setStartIdx={setStartIdx}
            setEndIdx={setEndIdx}
          />
        </div>
        <div css={buttonWrapper}>
          <Button handleBtnClick={() => navigate('/add')}>새 노트</Button>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
