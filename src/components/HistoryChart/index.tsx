import React, { useMemo } from 'react'

import { Chart } from 'react-charts';
import { Container } from './styles';


const HistoryChart: React.FC = () => {

  const data = useMemo(
    () => [
      {
        label: 'Calazans',
        data: [[2017, 100000], [2018, 200000], [2019, 400000], [2020, 200000]]
      }
    ],
    []
  )

  const series = useMemo(
    () => ({
      type: 'area'
    }),
    []
  )
  const axes = useMemo(
    () => [
      {
        primary: true, position: 'bottom', type: 'ordinal'
      },
      {
        position: 'left', type: 'linear', stacked: true
      }
    ],
    []
  )
  return (
    <Container>
      <Chart data={data} series={series} axes={axes} tooltip />
    </Container>
  )
}

export default HistoryChart;