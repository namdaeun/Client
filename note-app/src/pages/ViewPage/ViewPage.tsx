import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentBox from "../../components/ContentBox/ContentBox";
import Title from "../../components/Title/Title";
import { faPen, faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Theme } from "../../styles/theme";
import { btnWrapper, iconWrapper } from "./ViewPage.style";
import { useTheme } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const ViewPage = () => {
  const {theme} = useTheme();

  const [isHeart, setIsHeart] = useState(false);
  const toggleHeart = () => setIsHeart(prev => !prev);

  const navigate = useNavigate();
  const handleEditClick = () => navigate('/edit');

  const handleBackClick = () => navigate('/');
  const handleSaveClick = () => {
  }
  return (
    <>
      <Title>리액트 토이프로젝트</Title>
      <ContentBox variant="content" styles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '75%',
      }}>
        <div>어쩌고 저쩌고</div>
        <section css={iconWrapper}>
          <FontAwesomeIcon
            icon={isHeart ? faSolidHeart : faRegularHeart}
            color={isHeart ? Theme.colors.heartOn : theme.textColor}
            onClick={toggleHeart}
            size="lg"
            style={{cursor: 'pointer'}}
          />
        <FontAwesomeIcon
          icon={faPen}
          onClick={handleEditClick}
          style={{cursor: 'pointer'}}
        />
        </section>
      </ContentBox>
      <section css={btnWrapper}>
        <Button variant="default" handleBtnClick={handleBackClick}>뒤로가기</Button>
        <Button variant="secondary" handleBtnClick={handleSaveClick}>저장하기</Button>
      </section>
    </>
  );
};

export default ViewPage;
