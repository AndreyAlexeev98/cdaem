import classNames from "classnames";

import IconViber from '../icons/Viber/Viber';
import IconTelegram from '../icons/Telegram/Telegram';
import IconWhatsApp from '../icons/WhatsApp/WhatsApp';

import style from './Messengers.module.scss';

const Messengers = ( { contextClassList, contextClassItem,  title, width, height } ) => {
  return (
    <div className={style.messangers}>
      { title && <div className={style.messangers__title}>{title}</div> }
      <ul className={classNames(style.messangers__list, contextClassList)}>
        <li className={style.messangers__item}>
          <a href='viber://add?number=#' target='_blank' rel="noreferrer" className={classNames(style.messangers__link, contextClassItem)} >
            <IconViber className={style.messangers__img} width={width} height={height} />
          </a>
        </li>
        <li className={style.messangers__item}>
          <a href='https://t.me/#' target='_blank' rel="noreferrer" className={classNames(style.messangers__link, contextClassItem)}>
            <IconTelegram className={style.messangers__img} width={width} height={height} />
          </a>
        </li>
        <li className={style.messangers__item}>
          <a href='whatsapp://send?phone=#&text=#' target='_blank' rel="noreferrer" className={classNames(style.messangers__link, contextClassItem)}>
            <IconWhatsApp className={style.messangers__img} width={width} height={height} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Messengers;