import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { categoryList } from '../../constants/filter';
import { useTheme } from '../../context/theme';
import useOutsideClick from '../../hooks/useOutsideClick';
import * as s from './DropDown.style';

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

  useOutsideClick({ ref: dropDownRef, handleClose: () => setIsOpen(false) });

  return (
    <section css={s.wrapper} ref={dropDownRef}>
      <button onClick={dropdownHandler} css={s.dropDownWrapper(theme)}>
        {category}
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} css={s.iconWrapper} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} css={s.iconWrapper} />
        )}
      </button>
      {isOpen && (
        <section css={s.categoryListWrapper(theme)}>
          {categoryList.map((categoryItem) => (
            <article
              key={categoryItem}
              onClick={() => handleCategory(categoryItem)}
              css={s.categoryWrapper}
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
