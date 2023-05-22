import styled from 'styled-components';
import { Table } from 'antd';

export const RankingTablesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RankingTitle = styled.h3`
  font-weight: 500;
  font-size: 2.438rem;
  line-height: 1rem;
  text-transform: capitalize;
  margin-bottom: 3.125rem;
`;

export const RankingTable = styled(Table)`
  width: 100%;
`;
