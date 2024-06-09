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

const MainPage = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/add');
  };

  const dummyMemoData = [
    { id: 1, title: 'Memo 1' },
    { id: 2, title: 'Memo 2' },
    { id: 3, title: 'Memo 3' },
    { id: 4, title: 'Memo 4' },
    { id: 5, title: 'Memo 5' },
    { id: 6, title: 'Memo 6' },
    { id: 7, title: 'Memo 7' },
    { id: 8, title: 'Memo 8' },
    { id: 9, title: 'Memo 9' },
  ];

  const [page, setPage] = useState(1);
  const limit = 3;

  const totalMemo = dummyMemoData.length;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentMemoData = dummyMemoData.slice(startIndex, endIndex);

  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <section css={barWrapper}>
        <SearchBar />
        <DropDown />
      </section>
      {currentMemoData.map((memo) => (
        <MemoList key={memo.id} date="몇 초">
          {memo.title}
        </MemoList>
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
