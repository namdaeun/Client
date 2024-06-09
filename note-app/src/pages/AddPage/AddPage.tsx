import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ContentBox from '../../components/ContentBox/ContentBox';
import { useTheme } from '../../context/theme';
import { Theme } from '../../styles/theme';
import {
  buttonContainer,
  countContainer,
  detailInputWrapper,
  limitCount,
  pageWrapper,
  textCount,
  titleInputWrapper,
  titleWrapper,
} from './AddPage.style';

const AddPage = () => {
  const { theme } = useTheme();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [count, setCount] = useState(0);
  const [isExceed, setIsExceed] = useState(false);
  const navigate = useNavigate();

  const handleTextCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  useEffect(() => {
    if (count > 1000) {
      setIsExceed(true);
    } else {
      setIsExceed(false);
    }
  }, [count]);

  return (
    <main css={pageWrapper}>
      <h1 css={[Theme.fonts.header, titleWrapper]}>Jinda Note</h1>
      <ContentBox variant={'content'} styles={{ height: '2.5rem' }} isFocus={isTitleFocused}>
        <input
          css={[Theme.fonts.title, titleInputWrapper(theme)]}
          placeholder="노트 제목을 입력해주세요"
          ref={titleRef}
          onFocus={() => setIsTitleFocused(true)}
          onBlur={() => setIsTitleFocused(false)}
          maxLength={17}
        />
      </ContentBox>
      <ContentBox
        variant={'content'}
        styles={{ height: '30vh', flexDirection: 'column' }}
        isFocus={isContentFocused}
        isExceed={isExceed}
      >
        <textarea
          css={[Theme.fonts.detail, detailInputWrapper(theme)]}
          placeholder="노트 내용을 입력해주세요"
          ref={contentRef}
          onFocus={() => setIsContentFocused(true)}
          onBlur={() => setIsContentFocused(false)}
          onChange={handleTextCount}
          maxLength={1004}
        />
        <div css={countContainer}>
          <span css={textCount(isExceed, theme)}>{count}</span>
          <span css={limitCount(theme)}>/1000</span>
        </div>
      </ContentBox>
      <section css={buttonContainer}>
        <Button variant="secondary" handleBtnClick={() => navigate(`/`)}>
          뒤로가기
        </Button>
        <Button variant="default" handleBtnClick={() => navigate(`/`)}>
          저장하기
        </Button>
      </section>
    </main>
  );
};

export default AddPage;
