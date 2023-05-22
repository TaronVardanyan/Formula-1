import { MainPageWrapper } from './styles';
import Heading from './components/Heading';
import Content from './components/Content';

const MainPageContent = () => {
  return (
    <MainPageWrapper>
      <Heading />
      <Content />
    </MainPageWrapper>
  );
};

export default MainPageContent;
