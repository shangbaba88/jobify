import React, { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

function Register() {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  const {
    showAlert,
    displayAlert,

    isLoading,
    user,
    setupUser,
  } = useAppContext()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  const onSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, isMember } = values

    // 判断是否有空值
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: '登录成功!跳转中...',
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: '注册成功!跳转中...',
      })
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{!values.isMember ? '注册' : '登录'}</h3>
        {/* 弹窗 */}
        {showAlert && <Alert />}
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          提交
        </button>

        <p>
          {values.isMember ? '没有账号?' : '已有账号?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? '注册' : '登录'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register