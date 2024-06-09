import { useEffect, useRef, useState } from 'react';

import ContentBox from '../../components/ContentBox/ContentBox';
import { useTheme } from '../../context/theme';
import { Theme } from '../../styles/theme';
import {
  detailInputWrapper,
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
      <ContentBox variant={'content'} styles={{ height: '3rem' }} isFocus={isTitleFocused}>
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
        <span css={textCount}>{count}/1000</span>
      </ContentBox>
    </main>
  );
};

export default AddPage;
