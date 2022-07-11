import { useState } from "react";

import Modal from "../../components/shared/modal-form-send/modal-form-send.jsx";
import Socials from "../../components/shared/socials/socials.jsx";

const Contacts = () => {

  const [open, setOpen] = useState(false);

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
                  <a href='viber://add?number=#' className="data__link" target="_blank" rel="noreferrer">
                    <span className="viber messanger-link"></span>
                  </a>
                  <a href='https://t.me/#' className="data__link" target="_blank" rel="noreferrer" >
                    <span className="telegram messanger-link"></span>
                  </a> 
                  <a href='whatsapp://send?phone=#&text=#' className="data__link" target="_blank" rel="noreferrer" >
                    <span className="whatsapp messanger-link"></span>  
                  </a> 
                </span>
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
          <form className="form">
            <div className="form__row form__row--mb30">
              <div className="input">
                <div className="input__title">Ваше имя</div>
                <label className="input__label">
                  <div className="input__icon input__icon--name">
                  </div>
                  <input type="text" className='input__elem input__elem--name' placeholder="Введите имя" required />
                </label>
              </div>
              <div className="input">
                <div className="input__title">Ваша электронная почта</div>
                <label className="input__label">
                  <div className="input__icon input__icon--email"></div>
                  <input type="email" className='input__elem input__elem--email' placeholder="Введите email" required />
                </label>
              </div>
            </div>
            <div className="form__row form__row--mb40">
              <div className="input">
                <div className="input__title">Ваше сообщение</div>
                <label className="input__label">
                  <textarea className='input__elem input__elem--textarea' placeholder="Сообщение" required ></textarea>
                </label>
                
              </div>
            </div>
            <div className="form__row form__row--center">
              <input onClick={()=> setOpen(true)} className='form__btn' type="submit" value='Отправить' />
            </div>
          </form> 
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