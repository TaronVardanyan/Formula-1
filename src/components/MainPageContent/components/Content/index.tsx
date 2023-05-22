import { useState } from 'react';
import { ContentWrapper } from './styles';
import Seasons from './components/Seasons';
import RankingTables from './components/RankingTables';

const Content = () => {
  const [season, setSelectedSeason] = useState(2023);
  const [isDriverRanking, setRankingState] = useState(true);

  const handleSetSeason = (seasonData: number) => {
    setSelectedSeason(seasonData);
  };

  return (
    <ContentWrapper xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
      <Seasons selectedSeason={season} setSelected={handleSetSeason} />
      <RankingTables
        selectedSeason={season}
        isDriverRanking={isDriverRanking}
        setRankingState={setRankingState}
      />
    </ContentWrapper>
  );
};

export default Content;
