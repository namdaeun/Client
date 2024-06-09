import ContentBox from "../../../components/ContentBox/ContentBox";

const SearchBar = () => {

  return (
    <ContentBox variant='content' styles={{
      justifyContent: 'space-between',
      padding: '0 0.3rem',
      width: '14rem',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      border: 'gray solid 1px'
    }}>
      <div>검색</div>
      <div>아이콘</div>
    </ContentBox>
  );
};

export default SearchBar;