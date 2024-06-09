import { useRef, useState } from 'react';
import { categoryListWrapper, categoryWrapper, dropDownWrapper } from './DropDown.style';

const DropDown = () => {
  const [category, setCategory] = useState('최근생성순');
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const categoryList = ['최근생성순', '제목순', '즐겨찾기만'];

  const handleCategory = (category: string) => {
    setCategory(category);
    setIsOpen(false);
  };

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={dropdownHandler} css={dropDownWrapper}></button>
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
