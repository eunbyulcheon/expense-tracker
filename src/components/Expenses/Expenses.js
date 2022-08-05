import React from 'react';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const Expenses = ({ expenses }) => {
  return (
    <Container>
      {expenses.map(list => (
        <ExpenseItem
          key={list.id}
          title={list.title}
          price={list.amount}
          date={list.date}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  background-color: rgba(189, 195, 199, 0.1);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

export default Expenses;
