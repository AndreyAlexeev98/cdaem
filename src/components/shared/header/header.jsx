import React from 'react';
// import logo from './images/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">Главная</li>
                <li className="nav__item active">Новости</li>
                <li className="nav__item">Размещение и тарифы</li>
                <li className="nav__item nav__item--pointer">Объявления на карте</li>
                <li className="nav__item">Контакты</li>
              </ul>
            </nav>
            <div className='bookmarks'>Закладки</div>
            <div className='btn-sign-in'>Вход и регистрация</div>
          </div>
        </div>
      <div className="header__bottom">
        <div className="container">
          <a href='#' className='logo'>
            <img src='/src/images/icons/logo.svg' className="logo__img" alt="logo" />
          </a>
          <ul className="menu">
            <li className="menu__item menu__item--pointer">Квартиры на сутки</li>
            <li className="menu__item">Коттеджи и усадьбы</li>
            <li className="menu__item">Бани и Сауны</li>
            <li className="menu__item">Авто напрокат</li>
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