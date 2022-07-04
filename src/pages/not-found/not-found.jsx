import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="container">
        <div className="not-found__container">
        <div className="not-found__decor not-found__decor--top">
          <div className="decor-dots"></div>
        </div>
        <div className="not-found__content">
          <div className="not-found__left">
            <div className="not-found__title">Ошибка 404</div>
            <div className="not-found__subtitle">Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
            <Link to='/' className="not-found__btn">Вернуться на главную</Link>
          </div>
          <div className="not-found__right">404</div>
        </div>
        <div className="not-found__decor not-found__decor--bottom">
          <div className="decor-dots"></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;