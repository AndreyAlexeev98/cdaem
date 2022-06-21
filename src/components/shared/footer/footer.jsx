import logo from '../../../images/icons/logo.svg';
import './footer.css';
// import icons
import IconInsta from '../../../images/icons/insta.svg';
import IconVk from '../../../images/icons/vk.svg';
import IconFacebook from '../../../images/icons/facebook.svg';
import IconVisa from '../../../images/icons/visa.png';
import IconWebpay from '../../../images/icons/webpay.png';
import IconVisaVer from '../../../images/icons/verified-by-visa.png';
import IconMastercard from '../../../images/icons/mastercard.png';
import IconSecurecode from '../../../images/icons/securecode.png';
import IconBelkart from '../../../images/icons/belkart.png';

const Footer = (props) => {

  // const [appFooter, setAppFooter] = useState({});

  // useEffect(() => {
  //   axios.get<IFooter>(API_URL + REST_API.footer).then((resp) => {
  //     setAppFooter(resp.data);
  //   });
  // }, []);

  return (
    <div className='footer container'>
      <div className='footer__container'>
        <div className='footer__left'>
          <a href='#' className='logo footer__logo'>
            <img src={logo} className="logo__img" alt="logo" />
            <span className='logo__desc'>СДАЁМ БАЙ</span>   
          </a>
          <div className='requisites'>
            <span className='requisites__row'>ИП Шушкевич Андрей Викторович</span>
            <span className='requisites__row'>УНП 192602485 Минским горисполкомом</span>
            <span className='requisites__row'>10.02.2016</span>
            <span className='requisites__row'>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
            <span className='requisites__row'>+375 29 621 48 33, sdaem@sdaem.by</span>
            <span className='requisites__row'>Режим работы: 08:00-22:00</span>
          </div>
        </div>
        <div className='footer__right'>
          <div className='footer__top'>
            <ul className="menu footer__menu">
              {props.state.menuForFooter.map(el => <li className={'menu__item ' + el.anotherClass} key={el.id}>{el.name}</li>)}
            </ul>
            <div className='opened-menu footer__menu'>
              <div className='opened-menu__title'>Квартиры</div>
              <ul className='opened-menu__list'>
                {props.state.openedMenu.map(el => <li className={'opened-menu__item'} key={el.id}><a href='#' className='opened-menu__link'>{el.name}</a></li>)}
              </ul>
            </div>
            <nav className="nav footer__nav">
              <ul className="nav__list">
                {props.state.navForFooter.map(el => <li className={'nav__item '} key={el.id}>{el.name}</li>)}
              </ul>
            </nav>
          </div>
          <div className='footer__bottom'>
            <div className='socials'>
              <div className='socials__title'>Мы в соцселях</div>
              <ul className='socials__list'>
                <li className='socials__item'>
                  <a className='socials__link' href="#">
                    <img src={IconInsta} className="socials__img socials__img--insta" alt="insta" />
                  </a>
                </li>
                <li className='socials__item'>
                  <a className='socials__link' href="#">
                    <img src={IconVk} className="socials__img socials__img--vk" alt="vk" />
                  </a>
                </li>
                <li className='socials__item'>
                  <a className='socials__link' href="#">
                    <img src={IconFacebook} className="socials__img socials__img--facebook" alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
            <div className='payment'>
              <ul className='payment__list'>
                <li className='payment__item'>
                  <img src={IconVisa} className="payment__img payment__img--visa" alt="visa" />
                </li>
                <li className='payment__item'>
                  <img src={IconWebpay} className="payment__img payment__img--webpay" alt="webpay" />
                </li>
                <li className='payment__item'>
                  <img src={IconVisaVer} className="payment__img payment__img--visaver" alt="visa vericify" />
                </li>
                <li className='payment__item'>
                  <img src={IconMastercard} className="payment__img payment__img--mastercard" alt="mastercard" />
                </li>
                <li className='payment__item'>
                  <img src={IconSecurecode} className="payment__img payment__img--securecode" alt="securecode" />
                </li>
                <li className='payment__item'>
                  <img src={IconBelkart} className="payment__img payment__img--belkart" alt="belkart" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;