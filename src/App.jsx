import { useState } from 'react'
import './Index.css'

function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  // console.log({ login, password })
  const handleLogin = (e) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    event.preventDefault()
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: login,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === undefined) {
          return alert('Успешно')
        } else {
          return alert(result.message)
        }
      })
  }

  return (
    <div className='App'>
      <form className='auth'>
        <h1 className='title'>Auth Form</h1>
        <div className='container'>
          <div className='text-field'>
            <label
              htmlFor=''
              className='text-field__label'>
              Login
            </label>{' '}
            <input
              value={login}
              onChange={handleLogin}
              type='text'
              autoComplete='username'
              className='text-field__input'
            />{' '}
          </div>
          <div className='text-field'>
            <label
              htmlFor=''
              className='text-field__label'>
              Password
            </label>{' '}
            <input
              value={password}
              onChange={handlePassword}
              type='password'
              className='text-field__input'
              required
            />{' '}
          </div>
        </div>
        <button
          className='btn-new'
          onClick={handleApi}>
          Login
        </button>
      </form>
      <p className='text'>
        Логин и пароль для авторизиции:
        <br /> kminchelle / 0lelplR
      </p>
    </div>
  )
}

export default App
