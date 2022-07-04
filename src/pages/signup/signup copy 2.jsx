import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import ReCAPTCHA from "react-google-recaptcha";

import style from './signup.module.css'

import userIcon from '../../images/icons/user-grey.svg';
import mailIcon from '../../images/icons/mail-grey.svg';
import passwordIcon from '../../images/icons/password.svg';





const SignUp = () => {




  return (
    <div className={style.signup}>
      <div className={style.signup__title}>Регистрация</div>
      <div className={style.signup__main}>
        <form className={style.signup__form}>
          
          <Formik
              initialValues={{
                name:'',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: ''
              }}
              validateOnBlur
              onSubmit={(values) => {console.log(values)}}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <form className={style.signup__form}>

                <div className={style.form__row}>
                  <label className={style.form__label_input}>
                    <img src={userIcon} className={style.form__icon} />
                    <input name='login' type="text" placeholder="Логин" className={style.form__input} />
                  </label>
                </div>
                <div className={style.form__row}>
                  <label className={style.form__label_input}>
                    <img src={mailIcon} className={style.form__icon} />
                    <input name='email' type="email" placeholder="Электронная почта" className={style.form__input} />
                  </label>
                </div>
                <div className={style.form__row}>
                  <label className={style.form__label_input}>
                    <img src={passwordIcon} className={style.form__icon} />
                    <input name='password' type="password" placeholder="Пароль" className={style.form__input} />
                  </label>
                </div>
                <div className={style.form__row}>
                  <label className={style.form__label_input}>
                    <img src={passwordIcon} className={style.form__icon} />
                    <input type="password" placeholder="Повторие пароль" className={style.form__input} />
                  </label>
                </div>
                <div className={style.form__row}>
                  <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
                </div>
                <div className={style.form__row}>
                  <Link className={style.form__btn} to='confirm'>Зарегистрироваться</Link>
                  {/* <input className={style.form__btn} type="submit" value="Зарегистрироваться" /> */}
                </div>



              </form>
            ) }
          </Formik>


        </form>
        <div className={style.signup__text}>
          <div className={style.text_title}>Пользователь обязуется:</div>
            <ul className={style.text_list}>
              <li className={style.text_item}>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
              <li className={style.text_item}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
            <span className={style.signup__footer}>Уже есть аккаунт?  <Link className={style.signup__link} to='/login'>Войдите</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignUp;