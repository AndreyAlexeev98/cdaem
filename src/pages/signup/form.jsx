import React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from "../../components/shared/modal-form-send/modal-form-send.jsx";
import Socials from "../../components/shared/socials/socials.jsx";
import Input from "../../components/shared/Input/Input.jsx";
import IconUser from "../../components/shared/icons/user/user.jsx";
import IconMail from "../../components/shared/icons/mail/mail.jsx";
import Messangers from "../../components/shared/messengers/messengers.jsx"

const Contacts = () => {

  const schema = yup.object({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно name'),
    email: yup.string().email('Введите верный email').required('Обязательно email'),
    // password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина пароля - 5 символов').required('Обязательно пароль'),
    // confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      // password: '',
      // confirmPassword: ''
    },
  });

  const { handleSubmit, control, isValid, isDirty, touched, reset } = methods;

  const onSubmit = (data) => {
    if (data) {
      // axios.post(URL, data);
      console.log(data);
    }
    reset({});
    setOpen(true)
  }

  const inputWrapLink = React.createRef();

  const customFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.add('custom_focus')
  }

  const removeCustomFocus = () => {
    let elem = inputWrapLink.current;
    elem.classList.remove('custom_focus')
  }


  const [open, setOpen] = useState(false); // для открытия модалки

  return (
    <div className='contacts'>
      <div className='container'>
        <div className="contacts__info">
          <div className="contacts__title">Контакты</div>
          <div className="contacts__desc">Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</div>
          <div className="contacts__data">
            <ul className="data">
              <li className="data__item data__item--address">
                <div className="icon"></div>
                <span className="text">220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>  
              </li>
              <li className="data__item data__item--phones"> 
                <div className="icon"></div>
                <span className="text">
                  <a href="tel:375296214833" className="phone">+375 29 621-48-33</a> 
                </span>
                <Messangers contextClassList='contacts__messangers_list' contextClassItem='contacts__messangers_item' iconsSize='16' />
              </li>
              <li className="data__item data__item--email">
                <div className="icon"></div>
                <span className="text"><a href="mailto:sdaem@sdaem.by">sdaem@sdaem.by</a></span>  
              </li>
              <li className="data__item data__item--time">
                <div className="icon"></div>
                <div className="text"><div className="small">Режим работы:</div>08:00-22:00</div>
              </li>
            </ul>
          </div>
          <div className="contacts__requisites">
            <ul className='requisites'>
              <li className="requisites__item">ИП Шушкевич Андрей Викторович</li>
              <li className="requisites__item">УНП 192602485 Минским горисполкомом 10.02.2016</li>
            </ul>
          </div>
          <div className="contacts__warning">
            <span className="text">Администрация сайта не владеет информацией о наличии свободных квартир</span>
          </div>
        </div>
        <div className="contacts__form">
          <FormProvider {...methods}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__row form__row--mb30">
                <Input  name='name' type='text' placeholder='Введите имя' title='Ваше имя' icon={<IconUser />} required={true} control={control} />
                <Input name='email' type='email' placeholder='Введите email' title='Ваша электронная почта' icon={<IconMail />} required={true} control={control} />
              </div>
              <div className="form__row form__row--mb40">
                <div className="input">
                  <div className="input__title">Ваше сообщение</div>
                  <label ref={inputWrapLink} onBlur={removeCustomFocus} className="input__label">
                    <textarea onFocus={customFocus} className='input__elem input__elem--textarea' placeholder="Сообщение" ></textarea>
                  </label>
                </div>
              </div>
              <div className="form__row form__row--center">
                 <input className='form__btn' type="submit" value='Отправить' />
              </div>
            </form> 
          </FormProvider>
        </div>
        <div className="contacts__socials">
          <Socials contextClassList='contacts__socials_list' contextClassItem='contacts__socials_item' iconsSize='20' />
        </div>
      </div>
      <Modal open={open} onClose={()=> setOpen(false)}>Мы свяжемся с вами в ближайшее время.</Modal>
    </div>
  )
}

export default Contacts;