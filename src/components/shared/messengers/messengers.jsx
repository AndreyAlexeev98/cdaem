import classNames from "classnames";

import IconVk from '../icons/vk/vk.jsx';
import IconFacebook from '../icons/facebook/facebook_stroke';
import IconInsta from '../icons/insta/insta.jsx';

import IconViber from '../icons/viber/viber.jsx'
import IconTelegram from '../icons/telegram/telegram.jsx'
import IconWhatsApp from '../icons/whatsApp/whatsApp.jsx'

import style from './messengers.module.scss'

const Messengers = ( {contextClassList, contextClassItem,  title, iconsSize} ) => {
  return (
    <div className={style.messangers}>
      { title != undefined && title != '' && <div className={style.messangers__title}>{title}</div> }
      <ul className={classNames(style.messangers__list, contextClassList)}>
        <li className={style.messangers__item}>
          <a href='viber://add?number=#' target='_blank' className={classNames(style.messangers__link, contextClassItem)} >
            <IconViber className={style.messangers__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
        <li className={style.messangers__item}>
          <a href='https://t.me/#' target='_blank' className={classNames(style.messangers__link, contextClassItem)}>
            <IconTelegram className={style.messangers__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
        <li className={style.messangers__item}>
          <a href='whatsapp://send?phone=#&text=#' target='_blank' className={classNames(style.messangers__link, contextClassItem)}>
            <IconWhatsApp className={style.messangers__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Messengers;