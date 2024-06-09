import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentBox from '../../../components/ContentBox/ContentBox';
import { Theme } from '../../../styles/theme';
import { detailText, iconWrapper, textWrapper } from './MemoList.style';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface MemoListProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string;
}

const MemoList = ({ children, date }: MemoListProps) => {
  return (
    <ContentBox
      variant="content"
      styles={{
        padding: '0.7rem',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      }}
    >
      <article css={textWrapper}>
        <h1 css={Theme.fonts.title}>{children}</h1>
        <h2 css={[Theme.fonts.detail, detailText]}>{date + ' 전 수정했어요'}</h2>
      </article>
      <div css={iconWrapper}>
        <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </ContentBox>
  );
};

export default MemoList;
