import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

import IconExclamation from "../../components/shared/icons/Exclamation/Exclamation";
import InputAuth from '../../components/shared/Input-auth/Input-auth';
import IconUser from '../../components/shared/icons/User/User';
import IconMail from '../../components/shared/icons/Mail/Mail';
import IconPassword from '../../components/shared/icons/Password/Password';

import style from './Signup.module.scss'

const SignUp = () => {

  const validationsSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })

  let navigate = useNavigate();

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
          onSubmit={(values) => { console.log(values); navigate('confirm') }}
          validationSchema={validationsSchema}
        >
          { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <form className={style.signup__form}>
              <div className={style.form__row}> 
                <InputAuth name='login' type='text' placeholder='Логин' touched={touched.login} errors={errors.login} handleChange={handleChange} handleBlur={handleBlur} values={values.login} icon={<IconUser />} />
              </div>
              <div className={style.form__row}>
                <InputAuth name='email' type='email' placeholder='Электронная почта' touched={touched.email} errors={errors.email} handleChange={handleChange} handleBlur={handleBlur} values={values.email} icon={<IconMail />} />
              </div>
              <div className={style.form__row}>
                <InputAuth name='password' type='password' placeholder='Пароль' touched={touched.password} errors={errors.password} handleChange={handleChange} handleBlur={handleBlur} values={values.password} icon={<IconPassword />} />
              </div>
              <div className={style.form__row}>
                <InputAuth name='confirmPassword' type='password' placeholder='Повторие пароль' touched={touched.confirmPassword} errors={errors.confirmPassword} handleChange={handleChange} handleBlur={handleBlur} values={values.confirmPassword} icon={<IconPassword />} />
              </div>
              <div className={style.form__row}>
                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
              </div>
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