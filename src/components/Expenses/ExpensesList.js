import React from 'react';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <FallbackText>Found no expenses</FallbackText>;
  }

  return (
    <FilteredList>
      {filteredExpenses.map(list => (
        <ExpenseItem
          key={list.id}
          title={list.title}
          price={list.amount}
          date={list.date}
        />
      ))}
    </FilteredList>
  );
};

const FallbackText = styled.p`
  margin: 30px auto;
  text-align: center;
  font-weight: bold;
`;

const FilteredList = styled.ul``;

export default ExpensesList;
