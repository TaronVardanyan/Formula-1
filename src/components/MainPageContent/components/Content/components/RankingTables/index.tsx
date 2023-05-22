import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { RankingTablesWrapper, RankingTitle, RankingTable } from './styles';

interface Props {
  isDriverRanking: boolean;
  selectedSeason: number;
}

const RankingTables = ({ isDriverRanking, selectedSeason }: Props) => {
  const [rankingData, setRankingData] = useState();
  const options = useMemo(
    () => ({
      method: 'GET',
      url: `https://api-formula-1.p.rapidapi.com/rankings/${isDriverRanking ? 'drivers' : 'teams'}`,
      params: { season: String(selectedSeason) },
      headers: {
        'X-RapidAPI-Key': 'dbea243470msh4d5985740ff1426p18ca4ejsnb3333337d54d',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    }),
    [isDriverRanking, selectedSeason]
  );

  useEffect(() => {
    let isCanceled = false;
    async function getRanking() {
      try {
        if (!isCanceled) {
          const response = await axios.request(options);
          if (response?.data) {
            console.log(response?.data, 8888);
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
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    getRanking();
    return () => {
      isCanceled = true;
    };
  }, [options, isDriverRanking]);

  const columns = useMemo(() => {
    if (isDriverRanking) {
      return [
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position'
        },
        {
          title: 'Driver Name',
          dataIndex: 'driverName',
          key: 'driverName'
        },
        {
          title: 'Points',
          dataIndex: 'points',
          key: 'points'
        },
        {
          title: 'Number',
          dataIndex: 'number',
          key: 'number'
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (src: string) => <img src={src} />
        }
      ];
    } else {
      return [
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position'
        },
        {
          title: 'Team Name',
          dataIndex: 'teamName',
          key: 'teamName'
        },
        {
          title: 'Points',
          dataIndex: 'points',
          key: 'points'
        },
        {
          title: 'Logo',
          dataIndex: 'logo',
          key: 'logo',
          render: (src: string) => <img src={src} />
        }
      ];
    }
  }, []);

  return (
    <RankingTablesWrapper>
      <RankingTitle>Rankings</RankingTitle>
      <RankingTable columns={columns} dataSource={rankingData} />
    </RankingTablesWrapper>
  );
};

export default RankingTables;
