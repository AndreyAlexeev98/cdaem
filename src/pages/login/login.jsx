import { Link } from "react-router-dom";
import Checkbox from "../../components/checkbox/checkbox.jsx";

import userIcon from '../../images/icons/user-grey.svg';
import passwordIcon from '../../images/icons/password.svg';


const Login = () => {
  return (
    <div className='login'>
      <div className="login__title">Авторизация</div>
      <div className="login__text">Авторизируйтесь, чтобы начать публиковать свои объявления</div>
      <form className="login__form form">
        <div className="form__row">
          <label className="form__label-input">
            <img src={userIcon} alt="user name" className="form__icon" />
            <input type="text" placeholder="Логин" className="form__input" />
          </label>
        </div>
        <div className="form__row">
          <label className="form__label-input">
            <img src={passwordIcon} alt="user name" className="form__icon" />
            <input type="password" placeholder="Пароль" className="form__input" />
          </label>
        </div>

        <div className="form__row">
          <div className="form__label-checkbox">
            <Checkbox name={'remember login'} />
            <span className='form__label-checkbox'>Заполнить меня</span>
          </div>
          <a href="#" className="login__link">Забыли пароль?</a>
        </div>
        <div className="form__row form__row--last">
          <input className='form__btn' type="submit" value="Войти" />
        </div>
      </form>
      <span className="login__footer">Еще нет аккаунта? <Link className='login__link' to='/login/signup'>Создайте акканут</Link></span>
    </div>
  )
}

export default Login;