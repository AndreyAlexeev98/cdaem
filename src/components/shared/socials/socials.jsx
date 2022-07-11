import classNames from "classnames";

import IconVk from '../icons/vk/vk.jsx';
import IconFacebook from '../icons/facebook/facebook.jsx';
import IconInsta from '../icons/insta/insta.jsx';

import style from './socials.module.scss'

const Socials = ( {contextClassList, contextClassItem,  title, iconsSize} ) => {
  return (
    <div className={style.socials}>
      { title != undefined && title != '' && <div className={style.socials__title}>{title}</div> }
      <ul className={classNames(style.socials__list, contextClassList)}>
        <li className={classNames(style.socials__item, contextClassItem)}>
          <a href='https://instagram.com' target='_blank' className={style.socials__link} >
            <IconInsta className={style.socials__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
        <li className={classNames(style.socials__item, contextClassItem)}>
          <a href='https://vk.com/' target='_blank' className={style.socials__link}>
            <IconVk className={style.socials__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
        <li className={classNames(style.socials__item, contextClassItem)}>
          <a href='https://facebook.com' target='_blank' className={style.socials__link}>
            <IconFacebook className={style.socials__img} width={iconsSize} height={iconsSize} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials;