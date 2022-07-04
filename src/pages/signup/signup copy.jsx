import { Link } from "react-router-dom";

import userIcon from '../../images/icons/user-grey.svg';
import mailIcon from '../../images/icons/mail-grey.svg';
import passwordIcon from '../../images/icons/password.svg';

const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className="sign-up__title">Регистрация</div>
      <div className="sign-up__main">
        <form className="sign-up__form form">
          <div className="form__row">
            <label className="form__label-input">
              <img src={userIcon} className="form__icon" />
              <input type="text" placeholder="Логин" className="form__input" />
            </label>
          </div>
          <div className="form__row">
            <label className="form__label-input">
              <img src={mailIcon} className="form__icon" />
              <input type="email" placeholder="Электронная почта" className="form__input" />
            </label>
          </div>
          <div className="form__row">
            <label className="form__label-input">
              <img src={passwordIcon} className="form__icon" />
              <input type="password" placeholder="Пароль" className="form__input" />
            </label>
          </div>
          <div className="form__row">
            <label className="form__label-input">
              <img src={passwordIcon} className="form__icon" />
              <input type="password" placeholder="Повторие пароль" className="form__input" />
            </label>
          </div>
          <div className="form__row">
            {/* reCaptcha */}
          </div>
          <div className="form__row">
            <input className='form__btn' type="submit" value="Зарегистрироваться" />
          </div>
        </form>
        <div className="sign-up__text">
          <div className='text-title'>Пользователь обязуется:</div>
            <ul className='text-list'>
              <li className='text-item'>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
              <li className='text-item'>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
            <span className="sign-up__footer">Уже есть аккаунта?  <Link className='sign-up__link' to='/sign-up/signup'>Войдите</Link></span>
        </div>

      </div>
        
    </div>
  )
}

export default SignUp;