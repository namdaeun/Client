import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentBox from '../../../components/ContentBox/ContentBox';
import { Theme } from '../../../styles/theme';
import { detailText, iconWrapper, textWrapper } from './MemoList.style';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ActionProps, NoteProps } from '../../../hooks/useFetchData';
import { timeSince } from '../../../utils/date';

interface MemoListProps {
  data: NoteProps;
  dispatch: React.Dispatch<ActionProps>;
}

const MemoList = ({ data, dispatch }: MemoListProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view', { state: data.id });
  }

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', targetId: data.id});
  }
  return (
    <ContentBox
      variant="content"
      styles={{
        padding: '0.7rem',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      }}
    >
      <article css={textWrapper} onClick={handleClick}>
        <h1 css={Theme.fonts.title}>{data.title}</h1>
        <h2 css={[Theme.fonts.detail, detailText]}>{timeSince(data.editDate) + ' 전 수정했어요'}</h2>
      </article>
      <div css={iconWrapper}>
        <FontAwesomeIcon icon={faPen} onClick={() => navigate('/edit', { state: data.id })}/>
        <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete}/>
      </div>
    </ContentBox>
  );
};

export default MemoList;
