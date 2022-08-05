import React from 'react';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <Container>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Container>
  );
};

const Container = styled.div`
  width: 50rem;
  max-width: 95%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #fed330;
`;

export default NewExpense;
