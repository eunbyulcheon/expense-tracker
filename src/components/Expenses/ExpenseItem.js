import React from 'react';
import ExpenseDate from './ExpenseDate';
import styled from 'styled-components';

const ExpenseItem = ({ title, price, date }) => {
  return (
    <Container>
      <ExpenseDate date={date} />
      <Description>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Description>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 2px solid #3498db;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const Title = styled.h2`
  flex: 1;
  margin: 0 1rem;
  color: #3a3a3a;
  font-size: 1rem;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const Price = styled.div`
  padding: 0.5rem;
  border-radius: 12px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

export default ExpenseItem;
