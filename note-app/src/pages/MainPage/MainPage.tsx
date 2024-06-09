import ContentBox from '../../components/ContentBox/ContentBox';
import Title from '../../components/Title/Title';
import * as s from './MainPage.style';
import Quote from './Quote/Quote';
const MainPage = () => {
  return (
    <>
      <Title>Jinda Note</Title>
      <Quote />
      <ContentBox variant="content">리액트 토이 프로젝트</ContentBox>
    </>
  );
};

export default MainPage;
