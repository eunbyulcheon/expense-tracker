import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      {!isEditing ? (
        <AddExpenseBtn onClick={startEditingHandler}>
          Add New Expense
        </AddExpenseBtn>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
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

const AddExpenseBtn = styled.button`
  width: 200px;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: #fff;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
`;

export default NewExpense;
