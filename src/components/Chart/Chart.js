import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <ChartContainer>
      {dataPoints.map(points => (
        <ChartBar
          key={points.label}
          value={points.value}
          maxValue={totalMaximum}
          label={points.label}
        />
      ))}
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export default Chart;
