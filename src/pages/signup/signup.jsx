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

  const validationsShema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
  })


  return (
    <div className={style.signup}>
      <div className={style.signup__title}>Регистрация</div>
      <div className={style.signup__main}>
          
          <Formik
              initialValues={{
                login:'',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validateOnBlur
              onSubmit={(values) => {console.log(values)}}
              validationsShema={validationsShema}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <div className={style.signup__form}>

                <div className={style.form__row}>
                  <label htmlFor={`login`} className={style.form__label_input}>
                    <img src={userIcon} className={style.form__icon} />
                    <input value={values.login} onChange={handleChange} onBlur={handleBlur} name={`login`} type="text" placeholder="Логин" className={style.form__input} />
                    {touched.login && errors.login && <p className={'error'}>{errors.login}</p>}
                  </label>
                </div>

                <div className={style.form__row}>
                  <label htmlFor={`email`}  className={style.form__label_input}>
                    <img src={mailIcon} className={style.form__icon} />
                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} name={`email`} type="email" placeholder="Электронная почта" className={style.form__input} />
                    {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                  </label>
                </div>

                <div className={style.form__row}>
                  <label htmlFor={`password`} className={style.form__label_input}>
                    <img src={passwordIcon} className={style.form__icon} />
                    <input value={values.password} onChange={handleChange} onBlur={handleBlur} name={`password`} type="password" placeholder="Пароль" className={style.form__input} />
                    {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                  </label>
                </div>

                <div className={style.form__row}>
                  <label htmlFor={`confirmPassword`} className={style.form__label_input}>
                    <img src={passwordIcon} className={style.form__icon} />
                    <input value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} name={`confirmPassword`} type={`password`} placeholder="Повторие пароль" className={style.form__input} />
                    {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
                  </label>
                </div>

                <div className={style.form__row}>
                  <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
                </div>

                <div className={style.form__row}>
                  <button disabled={!isValid && !dirty} onClick={handleSubmit} className={style.form__btn} type={`submit`}>Зарегистрироваться</button>
                  {/* <Link className={style.form__btn} to='confirm'>Зарегистрироваться</Link> */}
                  {/* <input className={style.form__btn} type="submit" value="Зарегистрироваться" /> */}
                </div>



              </div>
            ) }
          </Formik>


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