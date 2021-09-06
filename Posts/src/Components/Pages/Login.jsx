import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import MyButton from '../../UI/Button/MyButton'
import MyInput from '../../UI/Input/MyInput'


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = (event) => {
          event.preventDefault()
          setIsAuth(true)
          localStorage.setItem('auth', 'true')
  }

    return (
        <div>
          <h1>
              Страница для регистрации
          </h1>
          <form onSubmit = {login}>
             <MyInput type="text" placeholder="Введите логин" />
             <MyInput type="password" placeholder="Введите пароль" />
             <MyButton>Войти</MyButton>


          </form>



        </div>
    )
}
export default Login