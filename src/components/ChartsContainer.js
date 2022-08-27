import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useState } from 'react'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useAppContext } from '../context/appContext'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useAppContext()

  return <Wrapper>
    <h4>图形统计</h4>

    <button type="button" onClick={() => setBarChart(!barChart)}>
      {barChart ? "面状图" : "柱状图"}
    </button>

    {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
  </Wrapper>
}

export default ChartsContainer
