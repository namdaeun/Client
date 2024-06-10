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

  const handleBtnClick = () => {
    navigate('/add');
  };

  const [page, setPage] = useState(1);
  const limit = 3;

  const totalMemo = data.length;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentMemoData = data.slice(startIndex, endIndex);

  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={barWrapper}>
        <SearchBar />
        <DropDown />
      </section>
      <Button handleBtnClick={() => navigate('/add')}>새 노트</Button>
      {currentMemoData.map((data) => (
        <MemoList key={data.id} data={data} dispatch={dispatch}/>
      ))}
      <section css={bottomwrapper}>
        <div css={paginationWrapper}>
          <Pagination totalMemo={totalMemo} limit={limit} page={page} setPage={setPage} />
        </div>
        <div css={buttonWrapper}>
          <Button handleBtnClick={handleBtnClick}>새 노트</Button>
        </div>
      </section>
    </>
  );
};

export default MainPage;
