import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import classNames from 'classnames';

import Checkbox from "../../components/Checkbox/Checkbox";
import IconUser from '../../components/shared/icons/User/User';
import IconPassword from '../../components/shared/icons/Password/Password';
import IconExclamation from "../../components/shared/icons/Exclamation/Exclamation";
import InputAuth from '../../components/shared/Input-auth/Input-auth';

import style from './Login.module.scss'

const Login = () => {

  const validationsSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  })

  return (
    <div className={style.root}>
      <div className={style.title}>Авторизация</div>
      <div className={style.text}>Авторизируйтесь, чтобы начать публиковать свои объявления</div>
      <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validateOnBlur
          onSubmit={
            (values) => { console.log(values) }
          }
          validationSchema={validationsSchema}
        >
          { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <form className={style.form}>
              <div className={style.form__row}>
                <InputAuth name='login' type='text' placeholder='Логин' touched={touched.login} errors={errors.login} handleChange={handleChange} handleBlur={handleBlur} values={values.login} icon={<IconUser />} />
              </div>
              <div className={style.form__row}>
                <InputAuth name='password' type='password' placeholder='Пароль' touched={touched.password} errors={errors.password} handleChange={handleChange} handleBlur={handleBlur} values={values.password} icon={<IconPassword />} />
              </div>
              <div className={style.form__row}>
                <div className={style.form__label_checkbox}>
                  <Checkbox name={'remember login'} />
                  <span className={style.form__label_checkbox}>Заполнить меня</span>
                </div>
                <a href="#" className={style.link}>Забыли пароль?</a>
              </div>
              <div className={classNames(style.form__row, style.form__row_last)}>
                { !isValid && !dirty &&
                    <div className={style.form__row}>
                      <div className={style.form__btn_error}>
                        <span className={style.form__btn_text}>Ошибка ввода</span>
                        <div className={style.icon_error_message}>
                          <IconExclamation  />
                        </div>
                      </div>
                    </div>
                }
                <input className={style.form__btn} 
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type='submit' 
                  value="Войти" />
              </div>
            </form>
          )}
        </Formik>
      <span className={style.footer}>Еще нет аккаунта? <Link className={style.link} to='/login/signup'>Создайте акканут</Link></span>
    </div>
  )
}

export default Login;