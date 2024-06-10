import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faPen, faHeart as faSolidHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBox from '../../../components/ContentBox/ContentBox';
import { ActionProps, NoteProps } from '../../../hooks/useFetchData';
import { Theme } from '../../../styles/theme';
import { timeSince } from '../../../utils/date';
import * as s from './MemoList.style';

interface MemoListProps {
  data: NoteProps;
  dispatch: React.Dispatch<ActionProps>;
}

const MemoList = ({ data, dispatch }: MemoListProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view', { state: data.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', targetId: data.id });
  };

  const handleToggleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch({ type: 'TOGGLE_LIKE', targetId: data.id });
  };

  return (
    <ContentBox
      variant="content"
      styles={{
        padding: '0.7rem',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        cursor: 'pointer',
      }}
    >
      <article css={s.textWrapper} onClick={handleClick}>
        <FontAwesomeIcon
          icon={data?.like ? faSolidHeart : faRegularHeart}
          color={data?.like ? Theme.colors.heartOn : Theme.colors.subText2Color}
          size="lg"
          onClick={handleToggleLike}
          css={s.iconStyle}
        />
        <h1 css={[Theme.fonts.title]}>{data.title}</h1>
        <h2 css={[Theme.fonts.detail, s.detailText]}>
          {timeSince(data.editDate) + ' 전 수정했어요'}
        </h2>
      </article>
      <div css={s.iconWrapper}>
        <FontAwesomeIcon icon={faPen} onClick={() => navigate('/edit', { state: data.id })} />
        <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete} />
      </div>
    </ContentBox>
  );
};

export default MemoList;
