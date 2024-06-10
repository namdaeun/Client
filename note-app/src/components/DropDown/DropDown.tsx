import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { categoryList } from '../../constants/filter';
import { useTheme } from '../../context/theme';
import {
  categoryListWrapper,
  categoryWrapper,
  dropDownWrapper,
  iconWrapper,
  wrapper,
} from './DropDown.style';

interface DropDownProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const DropDown = ({ category, setCategory }: DropDownProps) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleCategory = (category: string) => {
    setCategory(category);
    setIsOpen(false);
  };

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section css={wrapper}>
      <button onClick={dropdownHandler} css={dropDownWrapper(theme)}>
        {category}
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} css={iconWrapper} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} css={iconWrapper} />
        )}
      </button>
      {isOpen && (
        <section ref={dropDownRef} css={categoryListWrapper(theme)}>
          {categoryList.map((categoryItem) => (
            <article
              key={categoryItem}
              onClick={() => handleCategory(categoryItem)}
              css={categoryWrapper}
            >
              {categoryItem}
            </article>
          ))}
        </section>
      )}
    </section>
  );
};

export default DropDown;
