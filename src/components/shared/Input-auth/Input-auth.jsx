import React from "react";
import IconExclamation from '../../shared/icons/exclamation/exclamation.jsx';

import style from './Input-auth.module.scss';

const InputAuth = ( { name, type, placeholder, icon, touched, errors, handleChange, handleBlur, values } ) => {

  return (
    <label style={{borderColor: touched && errors && 'red'}} htmlFor={name} className={style.form__label_input} >
      <div className={style.form__icon} >{icon}</div>
      <input name={name} type={type} onChange={handleChange} onBlur={handleBlur} value={values} placeholder={placeholder} className={style.form__input} />
      <div className={style.icon_error}>
        {touched && errors && <IconExclamation  />}
      </div>
    </label>
  )
}

export default InputAuth;