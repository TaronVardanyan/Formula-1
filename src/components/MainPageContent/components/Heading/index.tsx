import { HeadingWrapper } from './styles';
import TitleSection from './components/TitleSection';
import ImageSection from './components/ImageSection';

const Heading = () => {
  return (
    <HeadingWrapper xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
      <TitleSection />
      <ImageSection />
    </HeadingWrapper>
  );
};

export default Heading;
