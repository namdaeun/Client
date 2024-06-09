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

const DropDown = () => {
  const { theme } = useTheme();
  const [category, setCategory] = useState('최근생성순');
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
