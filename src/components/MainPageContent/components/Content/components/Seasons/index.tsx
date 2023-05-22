import { useEffect, useState } from 'react';
import axios from 'axios';
import { SeasonsWrapper, SeasonsList, SeasonsListItem, SeasonsTitle } from './styles';

interface Props {
  selectedSeason: number;
  setSelected: (seasonData: number) => void;
}

const Seasons = ({ selectedSeason, setSelected }: Props) => {
  const [seasons, setSeasons] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/seasons',
    headers: {
      'X-RapidAPI-Key': 'dbea243470msh4d5985740ff1426p18ca4ejsnb3333337d54d',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    let isCanceled = false;
    async function getSeasons() {
      try {
        if (!isCanceled) {
          const response = await axios.request(options);
          if (response?.data) {
            setSeasons(response.data.response);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    getSeasons();
    return () => {
      isCanceled = true;
    };
  }, []);

  const handleDataBySeasons = (season: string) => {
    setSelected(+season);
  };

  return (
    <SeasonsWrapper>
      <SeasonsTitle>Seasons</SeasonsTitle>
      <SeasonsList>
        {seasons?.map((season, index) => (
          <SeasonsListItem
            className={`${season === selectedSeason ? 'active' : ''}`}
            key={index}
            onClick={() => handleDataBySeasons(season)}
          >
            {season}
          </SeasonsListItem>
        ))}
      </SeasonsList>
    </SeasonsWrapper>
  );
};

export default Seasons;
