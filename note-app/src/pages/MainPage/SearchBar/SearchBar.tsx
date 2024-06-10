import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentBox from '../../../components/ContentBox/ContentBox';
import { btnStyle, formStyle, search } from './SearchBar.style';
import { useTheme } from '../../../context/theme';
import { FormEvent, useState } from 'react';

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar = ({ setSearch }: SearchBarProps) => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };
  return (
    <ContentBox
      variant="content"
      styles={{
        padding: '0 0.3rem',
        width: '14rem',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 'gray solid 1px',
      }}
    >
      <form onSubmit={handleSubmit} css={formStyle}>
        <input
          css={search(theme)}
          type="text"
          placeholder="검색"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" css={btnStyle}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={theme.textColor}/>
        </button>
      </form>
    </ContentBox>
  );
};

export default SearchBar;
