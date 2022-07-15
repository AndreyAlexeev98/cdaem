import { Link } from "react-router-dom";
import classNames from "classnames";
import { Formik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

import userIcon from '../../images/icons/user-grey.svg';
import mailIcon from '../../images/icons/mail-grey.svg';
import passwordIcon from '../../images/icons/password.svg';
import IconExclamation from "../../components/shared/icons/exclamation/exclamation";

import style from './signup.module.scss'

const SignUp = () => {

  const validationsSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })


  return (
    <div className={style.signup}>
      <div className={style.signup__title}>Регистрация</div>
      <div className={style.signup__main}>
        
        <Formik
          initialValues={{
            login: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validateOnBlur
          onSubmit={(values) => { console.log(values) }}
          validationSchema={validationsSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <form className={style.signup__form}>
              <div className={style.form__row}> 
                <label style={{borderColor: touched.login && errors.login && 'red'}} htmlFor='login' className={style.form__label_input} >
                  <img src={userIcon} className={style.form__icon} />
                  <input name='login' type="text" onChange={handleChange} onBlur={handleBlur} value={values.login} placeholder="Логин" className={style.form__input} />
                  <div className={style.icon_error}>
                    {touched.login && errors.login && <IconExclamation  />}
                  </div>
                </label>
              </div>
              <div className={style.form__row}>
                <label style={{borderColor: touched.email && errors.email && 'red'}} htmlFor='email'  className={style.form__label_input}>
                  <img src={mailIcon} className={style.form__icon} />
                  <input name='email' type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Электронная почта" className={style.form__input} />
                  <div className={style.icon_error}>
                    {touched.email && errors.email && <IconExclamation  />}
                  </div>
                </label>
              </div>
              <div className={style.form__row}>
                <label style={{borderColor: touched.password && errors.password && 'red'}} htmlFor='password' className={style.form__label_input}>
                  <img src={passwordIcon} className={style.form__icon} />
                  <input name='password' type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Пароль" className={style.form__input} />
                  <div className={style.icon_error}>
                    {touched.password && errors.password && <IconExclamation  />}
                  </div>
                </label>
              </div>
              <div className={style.form__row}>
                <label style={{borderColor: touched.confirmPassword && errors.confirmPassword && 'red'}} htmlFor='confirmPassword' className={style.form__label_input}>
                  <img src={passwordIcon} className={style.form__icon} />
                  <input name='confirmPassword' type='password' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder="Повторие пароль" className={style.form__input} />
                  <div className={style.icon_error}>
                    {touched.confirmPassword && errors.confirmPassword && <IconExclamation  />}
                  </div>
                </label>
              </div>
              <div className={style.form__row}>
                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
              </div>
              { !isValid && !dirty &&
                  <div className={style.form__row}>
                    <div className={style.form__btn_error}>
                      <span className={style.form__btn_text}>Ошибка ввода</span>
                      <div className={style.icon_error_message}>
                        {touched.confirmPassword && errors.confirmPassword && <IconExclamation  />}
                      </div>
                    </div>
                  </div>
              }
              <div className={style.form__row}>
                <button className={style.form__btn}
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type='submit' >Зарегистрироваться</button>
              </div>
            </form>
          )}
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