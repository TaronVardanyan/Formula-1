import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Spin, Switch, message } from 'antd';
import { headers } from '../../../../../../headers';
import { driverColumns, teamColumns } from './utils';
import { RankingTablesWrapper, RankingTitle, RankingTable, Img, HeadingAction } from './styles';

interface Props {
  isDriverRanking: boolean;
  selectedSeason: number;
  setRankingState: (ranking: boolean) => void;
}

const RankingTables = ({ isDriverRanking, selectedSeason, setRankingState }: Props) => {
  const [rankingData, setRankingData] = useState();
  const [isLoading, setLoadingState] = useState(true);
  const options = useMemo(
    () => ({
      method: 'GET',
      url: `https://api-formula-1.p.rapidapi.com/rankings/${isDriverRanking ? 'drivers' : 'teams'}`,
      params: { season: String(selectedSeason) },
      headers
    }),
    [isDriverRanking, selectedSeason]
  );

  const handleChangeRanking = (value: boolean) => {
    setRankingState(value);
  };

  useEffect(() => {
    let isCanceled = false;
    setLoadingState(true);
    async function getRanking() {
      try {
        if (!isCanceled) {
          const response = await axios.request(options);
          if (response?.data) {
            const rankData = response.data.response.map((item: any, index: number) =>
              isDriverRanking
                ? {
                    key: index,
                    position: item.position,
                    driverName: item.driver.name,
                    points: item.points,
                    number: item.driver.number,
                    image: item.driver.image
                  }
                : {
                    key: index,
                    position: item.position,
                    teamName: item.team.name,
                    points: item.points,
                    logo: item.team.logo
                  }
            );
            setRankingData(rankData);
            setLoadingState(false);
          }
        }
      } catch (error: any) {
        console.error(error);
        message.error(error.message);
      }
    }
    getRanking();
    return () => {
      isCanceled = true;
    };
  }, [options, isDriverRanking]);

  const columns = useMemo(() => {
    if (isDriverRanking) {
      return driverColumns;
    } else {
      return teamColumns;
    }
  }, [driverColumns, teamColumns, isDriverRanking]);

  return (
    <RankingTablesWrapper>
      <HeadingAction>
        <RankingTitle>Rankings</RankingTitle>
        <Switch defaultChecked={isDriverRanking} onChange={handleChangeRanking} />
      </HeadingAction>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <RankingTable columns={columns} dataSource={rankingData} />
      )}
    </RankingTablesWrapper>
  );
};

export default RankingTables;
