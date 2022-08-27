import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import { useState } from 'react'

function Profile() {
  const {
    showAlert,
    user,
    isLoading,
    displayAlert,
    updateUser,
  } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [nickName, setNickName] = useState(user?.nickName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !nickName || !location) {
      displayAlert()
      return
    }

    // 发起用户请求
    updateUser({ name, email, nickName, location })
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>个人信息</h3>
        {showAlert && <Alert />}

        <div className="form-center">
          <FormRow
            labelText="名字"
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            labelText="昵称"
            type="text"
            name="nickName"
            value={nickName}
            handleChange={(e) => setNickName(e.target.value)}
          />
          <FormRow
            labelText="邮箱"
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            labelText="地点"
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />

          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? '请稍等...' : '保存'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
