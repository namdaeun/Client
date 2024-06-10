import { useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ContentBox from '../../components/ContentBox/ContentBox';
import Title from '../../components/Title/Title';
import { useTheme } from '../../context/theme';
import { Theme } from '../../styles/theme';
import { NoteProps, useFetchData } from '../../hooks/useFetchData';
import { buttonContainer, countContainer, detailInputWrapper, limitCount, pageWrapper, textCount, titleInputWrapper } from './WritingPage.style';

interface AddPageProps {
  variant?: 'add' | 'edit';
}
const WritingPage = ({variant='add'}:AddPageProps) => {
  const { theme } = useTheme();
  const location = useLocation();
  const noteId = variant == 'edit' ? location.state : '';

  const { data: fetchData, dispatch } = useFetchData();
  const data = fetchData.find((d: NoteProps) => d.id === noteId);

  const [title, setTitle] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');
  const count = content.length;
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [isExceed, setIsExceed] = useState(false);
  const navigate = useNavigate();
  

  const handleTextCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSaveClick = () => {
    const newNote: NoteProps = {
      id: noteId || new Date().getTime().toString(),
      title: title,
      content: content,
      createDate: data?.createDate || new Date().toISOString(),
      editDate: new Date().toISOString(),
      like: false,
    };

    if (variant == 'add') {
      dispatch({ type: 'CREATE', data: newNote});
    } else {
      dispatch({ type: 'EDIT', data: newNote});
    }

    setTimeout(() => navigate('/'), 0);
  }

  useEffect(() => {
    if (count > 1000) setIsExceed(true);
    else setIsExceed(false);
  }, [count]);

  useEffect(() => {
    if (noteId) {
      setTitle(data?.title || '');
      setContent(data?.content || '');
    }
  }, []);

  return (
    <main css={pageWrapper}>
      <Title>Jinda Note</Title>
      <ContentBox variant={'content'} styles={{ height: '2.5rem' }} isFocus={isTitleFocused}>
        <input
          css={[Theme.fonts.title, titleInputWrapper(theme)]}
          placeholder="노트 제목을 입력해주세요"
          ref={titleRef}
          onFocus={() => setIsTitleFocused(true)}
          onBlur={() => setIsTitleFocused(false)}
          maxLength={17}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          value={content}
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
        <Button variant="default" handleBtnClick={handleSaveClick}>
          저장하기
        </Button>
      </section>
    </main>
  );
};

export default WritingPage;
