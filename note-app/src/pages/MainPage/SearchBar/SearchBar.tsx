import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentBox from "../../../components/ContentBox/ContentBox";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Theme } from "../../../styles/theme";
import { textStyle } from "./SearchBar.style";

const SearchBar = () => {

  return (
    <ContentBox variant='content' styles={{
      justifyContent: 'space-between',
      padding: '0 0.3rem',
      width: '14rem',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      border: 'gray solid 1px'
    }}>
      <div css={textStyle}>검색</div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </ContentBox>
  );
};

export default SearchBar;