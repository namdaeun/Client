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

const ViewPage = () => {
  const { theme } = useTheme();
  const noteId = useLocation().state;
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
  const handleShareClick = () => {};
  return (
    <main css={s.wrapper}>
      <Title>{data?.title}</Title>
      <ContentBox variant="content" styles={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        height: '80%',
        padding: '0.5rem'
      }}>
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
