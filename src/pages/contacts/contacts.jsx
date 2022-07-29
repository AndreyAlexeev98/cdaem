import React from "react";
import { useState } from "react";
import classNames from "classnames";

import Modal from "../../components/shared/Modal-form-send/Modal-form-send";
import Socials from "../../components/shared/Socials/Socials";
import Messangers from "../../components/shared/Messengers/Messengers"
import Form from "../../components/Form/Form"

import styles from "./Contacts.module.scss"

const Contacts = () => {

  const [open, setOpen] = useState(false); // для открытия модалки

  return (
    <div className={styles.root}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.info}>
          <div className={styles.title}>Контакты</div>
          <div className={styles.desc}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</div>
          <div className={styles.data}>
            <ul>
              <li className={classNames(styles.data__item, styles.data__item_address)}>
                <div className={styles.icon} />
                <span className={styles.text}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>  
              </li>
              <li className={classNames(styles.data__item, styles.data__item_phones)}> 
                <div className={styles.icon} />
                <span className={styles.text}>
                  <a href="tel:375296214833" className={styles.phone}>+375 29 621-48-33</a> 
                </span>
                <Messangers contextClassList={styles.messangers_list} contextClassItem={styles.messangers_item} width='16' height='16' />
              </li>
              <li className={classNames(styles.data__item, styles.data__item_email)}>
                <div className={styles.icon} />
                <span className={styles.text}><a href="mailto:sdaem@sdaem.by">sdaem@sdaem.by</a></span>  
              </li>
              <li className={classNames(styles.data__item, styles.data__item_time)}>
                <div className={styles.icon} />
                <div className={styles.text}><div className={styles.small}>Режим работы:</div>08:00-22:00</div>
              </li>
            </ul>
          </div>
          <div className={styles.requisites}>
            <ul className={styles.requisites}>
              <li className={styles.requisites__item}>ИП Шушкевич Андрей Викторович</li>
              <li className={styles.requisites__item}>УНП 192602485 Минским горисполкомом 10.02.2016</li>
            </ul>
          </div>
          <div className={styles.warning}>
            <span className={styles.text}>Администрация сайта не владеет информацией о наличии свободных квартир</span>
          </div>
        </div>
        <div className={styles.form}>
          <Form openModal={setOpen}/>
        </div>
        <div className={styles.socials}>
          <Socials contextClassList={styles.socials_list} contextClassItem={styles.socials_item} width='20' height='20'  />
        </div>
      </div>
      <Modal open={open} onClose={()=> setOpen(false)}>Мы свяжемся с вами в ближайшее время.</Modal>
    </div>
  )
}

export default Contacts;