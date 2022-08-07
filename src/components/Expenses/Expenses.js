import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Container>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

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
