import React from 'react';
import styled from 'styled-components';

const ExpenseFilter = ({ selected, onChangeFilter }) => {
  const dropdownHandler = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <Control>
      <FilterLabel>Filter by year</FilterLabel>
      <FilterSelect value={selected} onChange={dropdownHandler}>
        <Option value="2022">2022</Option>
        <Option value="2021">2021</Option>
        <Option value="2020">2020</Option>
        <Option value="2019">2019</Option>
      </FilterSelect>
    </Control>
  );
};

const Control = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  color: #000;
  padding: 0 1rem;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border: 2px solid #fed330;
  border-radius: 6px;
`;

const Option = styled.option``;

export default ExpenseFilter;
