import React, { useState } from 'react';
import styled from 'styled-components';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const titleChangeHandler = e => {
    setTitleInput(e.target.value);
  };

  const amountChangeHandler = e => {
    setAmountInput(e.target.value);
  };

  const dateChangeHandler = e => {
    setDateInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };

    onSaveExpenseData(expenseData);
    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  };

  return (
    <ContainerForm onSubmit={submitHandler}>
      <Controls>
        <Control>
          <Title>Title</Title>
          <TitleInput
            type="text"
            value={titleInput}
            onChange={titleChangeHandler}
          />
        </Control>
        <Control>
          <Amount>Amount</Amount>
          <AmountInput
            type="number"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={amountChangeHandler}
          />
        </Control>
        <Control>
          <Date>Date</Date>
          <DateInput
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </Control>
      </Controls>
      <Actions>
        <AddBtn type="submit">Add Expense</AddBtn>
      </Actions>
    </ContainerForm>
  );
};

const ContainerForm = styled.form``;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Control = styled.div``;

const Title = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TitleInput = styled.input`
  width: 15rem;
  max-width: 100%;
  padding: 0.5rem;
  border: 2px solid #fed330;
  border-radius: 6px;
`;

const Amount = styled(Title)``;

const AmountInput = styled(TitleInput)``;

const Date = styled(Title)``;

const DateInput = styled(TitleInput)``;

const Actions = styled.div`
  text-align: right;
`;

const AddBtn = styled.button`
  background-color: #f7b731;
  color: #fff;
  font: inherit;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #fd9644;
  }
`;

export default ExpenseForm;
