import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import Wrapper from '../assets/wrappers/StatsContainer'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: '待定',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: '面试',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: '拒绝',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
