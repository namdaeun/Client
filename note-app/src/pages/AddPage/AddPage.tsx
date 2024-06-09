import { useEffect, useRef, useState } from 'react';
import ContentBox from '../../components/@common/ContentBox/ContentBox';
import { Theme } from '../../styles/theme';
import { detailInputWrapper, pageWrapper, titleInputWrapper, titleWrapper } from './AddPage.style';

const AddPage = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  return (
    <main css={pageWrapper}>
      <h1 css={[Theme.fonts.header, titleWrapper]}>Jinda Note</h1>
      <ContentBox variant={'content'} isFocus={isTitleFocused}>
        <input
          css={[Theme.fonts.title, titleInputWrapper]}
          placeholder="노트 제목을 입력해주세요"
          ref={titleRef}
          onFocus={() => setIsTitleFocused(true)}
          onBlur={() => setIsTitleFocused(false)}
        />
      </ContentBox>
      <ContentBox variant={'content'} styles={{ height: '9rem' }} isFocus={isContentFocused}>
        <textarea
          css={[Theme.fonts.detail, detailInputWrapper]}
          placeholder="노트 내용을 입력해주세요"
          ref={contentRef}
          onFocus={() => setIsContentFocused(true)}
          onBlur={() => setIsContentFocused(false)}
        />
      </ContentBox>
    </main>
  );
};

export default AddPage;
