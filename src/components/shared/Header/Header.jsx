import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";

import IconMainLogo from '../Main-logo/Main-logo';
import Menu from '../Menu/Menu';
import NavList from '../Nav-list/Nav-list';
import NAV_FOR_HEADER from '../../../data/nav-for-header';
import MENU_HEADER from '../../../data/menu-for-header';
import IconHeart from '../icons/Heart/Heart';

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={classNames(style.header__top_container, 'container')}>
          <div className={style.header__nav}>
            <NavList list={NAV_FOR_HEADER} contextClass={style.nav_position} />
          </div>
          <Link to='/bookmarks' className={style.link}>
            <span>Закладки</span>
            <IconHeart className={style.link__icon} /> 
          </Link>
          <Link to='/login' className={style.link_auth}>Вход и регистрация</Link>
        </div>
      </div>
      <div className={style.header__bottom}>
        <div className={classNames(style.header__bottom_container, 'container')}>
          <IconMainLogo contextClass={style.header__logo} />
          <Menu list={MENU_HEADER} contextClass={style.menu_position} />
          <Link to='/login' className={style.btn}>
            <span className={style.btn__text}>Разместить объявление</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;