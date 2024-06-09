import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { categoryList } from '../../constants/filter';
import {
  categoryListWrapper,
  categoryWrapper,
  dropDownWrapper,
  iconWrapper,
} from './DropDown.style';

const DropDown = () => {
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
    <>
      <button onClick={dropdownHandler} css={dropDownWrapper}>
        {category}
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretDown} css={iconWrapper} />
        ) : (
          <FontAwesomeIcon icon={faCaretUp} css={iconWrapper} />
        )}
      </button>
      {isOpen && (
        <section ref={dropDownRef} css={categoryListWrapper}>
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
    </>
  );
};

export default DropDown;
