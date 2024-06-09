import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentBox from '../../../components/ContentBox/ContentBox';
import { Theme } from '../../../styles/theme';
import { detailText, iconWrapper, textWrapper } from './MemoList.style';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';

interface MemoListProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string;
  id: string;
}

const MemoList = ({ children, date , id}: MemoListProps) => {
  const navigate = useNavigate();
  const { data, dispatch } = useFetchData();

  const handleClick = () => {
    navigate('/view', { state: id });
  }

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', targetId: id});
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
        <h1 css={Theme.fonts.title}>{children}</h1>
        <h2 css={[Theme.fonts.detail, detailText]}>{date + ' 전 수정했어요'}</h2>
      </article>
      <div css={iconWrapper}>
        <FontAwesomeIcon icon={faPen} onClick={() => navigate('/edit', { state: id })}/>
        <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete}/>
      </div>
    </ContentBox>
  );
};

export default MemoList;
