import React from 'react';
import styled from 'styled-components';

const ChartBar = ({ value, maxValue, label }) => {
  let barHeight = '0%';

  if (maxValue > 0) {
    barHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <BarWrapper>
      <InnerBar>
        <BarFill style={{ height: barHeight }} />
      </InnerBar>
      <BarLabel>{label}</BarLabel>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerBar = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const BarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

export default ChartBar;
