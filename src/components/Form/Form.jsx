import React from "react";
import classNames from "classnames";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import Input from "../shared/Input/Input";
import IconUser from "../shared/icons/User/User";
import IconMail from "../shared/icons/Mail/Mail";

import style from "./Form.module.scss";

const Form = ( {openModal} ) => {

  const schema = yup.object({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно name'),
    email: yup.string().email('Введите верный email').required('Обязательно email'),
  })

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    if (data) {
      // axios.post(URL, data);
      console.log(data);
    }
    reset({});
    openModal(true);
  }

  // Имитация события focus на обертке инпута:
  const inputWrapLink = React.createRef();

  const customFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.add('custom_focus')
  }

  const removeCustomFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.remove('custom_focus')
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames(style.form__row, style.form__row_mb30)} >
          <Input name='name' type='text' placeholder='Введите имя' title='Ваше имя' icon={<IconUser />} required control={control} />
          <Input name='email' type='email' placeholder='Введите email' title='Ваша электронная почта' icon={<IconMail />} required control={control} />
        </div>
        <div className={classNames(style.form__row, style.form__row_mb40)}>
          <div className={style.input}>
            <div className={style.input__title}>Ваше сообщение</div>
            <label ref={inputWrapLink} onBlur={removeCustomFocus} className={style.input__label}>
              <textarea onFocus={customFocus} className={classNames(style.input__elem, style.input__elem_textarea)} placeholder="Сообщение" ></textarea>
            </label>
          </div>
        </div>
        <div className={classNames(style.form__row, style.form__row_center)}>
            <input className={style.form__btn} type="submit" value='Отправить' />
        </div>
      </form> 
    </FormProvider>
  )
}

export default Form;