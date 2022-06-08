import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__top container">
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
          <div className="header__bottom">
            <div className="container">
              <img src={logo} className="logo" alt="logo" />
              <ul className="menu">
                <li className="menu__item menu__item--pointer">Квартиры в Минске</li>
                <li className="menu__item">Коттеджи и усадьбы</li>
                <li className="menu__item">Бани и Сауны</li>
                <li className="menu__item">Авто напрокат</li>
                <li className="menu__item">Квартиры в Минске</li>
              </ul>
              <button type="button" className="btn-add">
                <span className="btn-add__text">Разместить объявление</span>
              </button>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
