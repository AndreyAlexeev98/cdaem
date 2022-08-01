import React from "react";
import { Controller, useFormContext  } from "react-hook-form";

import IconExclamation from '../../shared/icons/Exclamation/Exclamation';

import style from './Input.module.scss';

const Input = ( { name, type, placeholder, title, icon, required, rules  } ) => {

  const inputWrapLink = React.createRef();
  
  const customFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.add(style.custom_focus)
  }

  const removeCustomFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.remove(style.custom_focus)
  }

  const { control, formState: { errors } } = useFormContext()

  return (
    <label htmlFor={name}>
      { title && <div className={style.title}>{title} {required && <span className={style.required_point}>*</span>}</div> }
      <div className={style.input_wrap} ref={inputWrapLink} onBlur={removeCustomFocus}>
        {icon && <div className={style.input_icon}>{icon}</div>}
        <Controller control={control} rules={rules} name={name} render={({field}) => <input className={style.input_elem} onFocus={customFocus} id={name} type={type} placeholder={placeholder} {...field} />} />
        <div className={style.icon_error}> {name && errors[name] && <IconExclamation />} </div>
      </div> 
    </label>
  )
}

export default Input;