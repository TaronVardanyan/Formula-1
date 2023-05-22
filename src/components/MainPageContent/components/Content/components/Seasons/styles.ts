import styled from 'styled-components';

export const SeasonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 5.125rem;
`;

export const SeasonsTitle = styled.h3`
  font-weight: 500;
  font-size: 2.438rem;
  line-height: 1rem;
  text-transform: capitalize;
  margin-bottom: 3.125rem;
`;

export const SeasonsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SeasonsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-right: 2rem;
  transition: 0.3s;
  cursor: pointer;
  border: 3px solid transparent;

  &.active {
    border: 3px solid #ff0100;
  }

  &:last-child {
    margin: 0;
  }

  &:hover {
    box-shadow: 0px 3px 30px rgba(255, 1, 0, 0.2);
  }
`;
