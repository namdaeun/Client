import React from 'react';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faPen, faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ContentBox from '../../components/ContentBox/ContentBox';
import Title from '../../components/Title/Title';
import { useTheme } from '../../context/theme';
import { NoteProps, useFetchData } from '../../hooks/useFetchData';
import { Theme } from '../../styles/theme';
import * as s from './ViewPage.style';
import html2canvas from 'html2canvas';

const ViewPage: React.FC = () => {
  const { theme } = useTheme();
  const noteId = useLocation().state as string;
  const { data: fetchData, dispatch } = useFetchData();
  const data = fetchData.find((d) => d.id === noteId);

  const toggleHeart = () => {
    if (!data?.id) return;

    const newData: NoteProps = {
      ...data,
      like: !data.like,
    };
    dispatch({ type: 'EDIT', data: newData });
  };

  const navigate = useNavigate();
  const handleEditClick = () => navigate('/edit', { state: noteId });

  const handleBackClick = () => navigate('/');

  const handleShareClick = async () => {
    const element = document.getElementById('screenshot-area');
    if (element) {
      const canvas = await html2canvas(element);
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({
                'image/png': blob,
              }),
            ]);
            alert('Jinda Note를 이용해주셔서 감사합니다. 성공적으로 공유되었습니다.');
          } catch (error) {
            console.error('클립보드 복사 실패:', error);
            alert('공유를 실패하였습니다. 다시 시도해주시기 바랍니다.');
          }
        }
      });
    }
  };

  return (
    <main css={s.wrapper}>
      <Title>{data?.title}</Title>
      <ContentBox
        variant="content"
        styles={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'space-between',
          height: '75%',
          marginBottom: '5%',
          padding: '0.5rem',
        }}
      >
        <article css={s.content}>{data?.content}</article>
        <section css={s.iconWrapper}>
          <FontAwesomeIcon
            icon={data?.like ? faSolidHeart : faRegularHeart}
            color={data?.like ? Theme.colors.heartOn : theme.textColor}
            onClick={toggleHeart}
            size="lg"
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon icon={faPen} onClick={handleEditClick} style={{ cursor: 'pointer' }} />
        </section>
      </ContentBox>
      <section css={s.btnWrapper}>
        <Button variant="secondary" handleBtnClick={handleBackClick}>
          뒤로가기
        </Button>
        <Button variant="default" handleBtnClick={handleShareClick}>
          공유하기
        </Button>
      </section>
    </main>
  );
};

export default ViewPage;
