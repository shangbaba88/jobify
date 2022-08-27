import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
  return (
    <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not-found'/>
      <h3>对不起！您访问的页面不存在哦</h3>
      <Link to="/">返回首页</Link>
    </div>
    </Wrapper>
  )
}

export default Error