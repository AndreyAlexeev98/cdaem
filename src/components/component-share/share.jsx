import IconVk from '../../components/shared/icons/vk/vk.jsx'
import IconFacebook from '../../components/shared/icons/facebook/facebook.jsx'
import IconViber from '../../components/shared/icons/viber/viber.jsx'
import IconTelegram from '../../components/shared/icons/telegram/telegram.jsx'
import IconWhatsApp from '../../components/shared/icons/whatsApp/whatsApp.jsx'

import style from './share.module.scss'

const ShareComponent = () => {

  return (
    <div className={style.share}>
      <div className={style.share__title}>Поделиться</div>
      <ul className={style.share__list}>
        <li className={style.share__item}>
          <a href="https://vk.com" target="_blank" className={style.share__link}>
            <IconVk className={style.share__img} width='18px' height='18px' />
          </a>
        </li>
        <li className={style.share__item}>
          <a href="https://fb.com" target="_blank" className={style.share__link}>
            <IconFacebook className={style.share__img} />
          </a>
        </li>
        <li className={style.share__item}>
          <a href="viber://add?number=#" target="_blank" className={style.share__link}>
            <IconViber className={style.share__img} width='22px' height='22px' />
          </a>
        </li>
        <li className={style.share__item}>
          <a href="https://t.me/#" target="_blank" className={style.share__link}>
            <IconTelegram className={style.share__img} />
          </a>
        </li>
        <li className={style.share__item}>
          <a href="whatsapp://send?phone=#&text=#" target="_blank" className={style.share__link}>
            <IconWhatsApp className={style.share__img} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ShareComponent;