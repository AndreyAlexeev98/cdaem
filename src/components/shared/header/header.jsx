import React from 'react';
import logo from '../../../images/icons/logo.svg';
import style from './header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={style.container}>
            <nav className="nav header__nav">
              <ul className="nav__list">
                {props.state.navForHeader.map(el => <li className={'nav__item ' + el.anotherClass} key={el.id}>{el.name}</li>)}
              </ul>
            </nav>
            <div className='bookmarks'>Закладки</div>
            <div className='btn-sign-in'>Вход и регистрация</div>
          </div>
        </div>
      <div className="header__bottom" key='lol'>
        <div className="container">
          <a href='#' className='logo header__logo'>
            <img src={logo} className="logo__img" alt="logo" />   
          </a>
          <ul className="menu header__menu">
            {props.state.menuForHeader.map(el => <li className={'menu__item ' + el.anotherClass} key={el.id}>{el.name}</li>)}
          </ul>
          <button type="button" className="btn-add">
            <span className="btn-add__text">Разместить объявление</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;