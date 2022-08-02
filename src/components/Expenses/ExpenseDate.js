import React from 'react';
import styled from 'styled-components';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <Date>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </Date>
  );
};

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 12px;
  background-color: #3498db;
  color: #fff;
`;

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const Year = styled.div`
  font-size: 0.75rem;
`;

const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ExpenseDate;
