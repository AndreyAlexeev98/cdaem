import classNames from "classnames";

import IconVk from '../icons/Vk/Vk';
import IconFacebook from '../icons/Facebook/Facebook_stroke';
import IconInsta from '../icons/Insta/Insta';

import style from './Socials.module.scss'

const Socials = ( { contextClassList, contextClassItem, title, width, height } ) => {
  return (
    <div className={style.socials}>
      { title && <div className={style.socials__title}>{title}</div> }
      <ul className={classNames(style.socials__list, contextClassList)}>
        <li className={style.socials__item}>
          <a href='https://instagram.com' target='_blank' rel='noreferrer' className={classNames(style.socials__link, contextClassItem)} >
            <IconInsta className={style.socials__img} width={width} height={height} />
          </a>
        </li>
        <li className={style.socials__item}>
          <a href='https://vk.com/' target='_blank' rel='noreferrer' className={classNames(style.socials__link, contextClassItem)}>
            <IconVk className={style.socials__img} width={width} height={height} />
          </a>
        </li>
        <li className={style.socials__item}>
          <a href='https://facebook.com' target='_blank' rel='noreferrer' className={classNames(style.socials__link, contextClassItem)}>
            <IconFacebook className={style.socials__img} width={width} height={height} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials;