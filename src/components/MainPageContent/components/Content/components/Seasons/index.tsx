import { useEffect, useState } from 'react';
import axios from 'axios';
import { headers } from '../../../../../../headers';
import { AnimatePresence } from 'framer-motion';
import { message } from 'antd';
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
    headers
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
      } catch (error: any) {
        console.error(error);
        message.error(error.message);
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
        <AnimatePresence>
          {seasons?.map((season, index) => (
            <SeasonsListItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`${season === selectedSeason ? 'active' : ''}`}
              key={index}
              onClick={() => handleDataBySeasons(season)}>
              {season}
            </SeasonsListItem>
          ))}
        </AnimatePresence>
      </SeasonsList>
    </SeasonsWrapper>
  );
};

export default Seasons;
