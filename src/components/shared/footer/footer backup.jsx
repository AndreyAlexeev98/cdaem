import Menu from '../menu/menu.jsx';
import MENU_FOOTER from '../../../data/menu-for-footer.js';
import MENU_FOOTER_OPEN from '../../../data/menu-for-footer-open.js';
import IconMainLogo from '../main-logo/main-logo.jsx';
import AnotherNavList from '../another-nav-list/another-nav-list.jsx';
import NAV_FOR_FOOTER from '../../../data/nav-for-footer.js';
import Requisites from '../../requisites/requisites.jsx';
import Socials from '../socials/socials.jsx';
import Payment from '../../payment/payment.jsx';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__left'>
          <IconMainLogo name='сдаем бай' contextClass='logo' />
          <Requisites />
        </div>
        <div className='footer__right'>
          <div className='footer__top'>
            <Menu list={ MENU_FOOTER } contextClass='menu_position' />
            <div className='opened-menu footer__menu'>
              <div className='opened-menu__title'>Квартиры</div>
              <ul className='opened-menu__list'>
                {
                  MENU_FOOTER_OPEN.map(el => <li className={'opened-menu__item'} key={el.id}><a href='#' className='opened-menu__link'>{el.name}</a></li>)
                }
              </ul>
            </div>
            <div className="footer__nav">
              <AnotherNavList list={ NAV_FOR_FOOTER } contextClass='nav-position' />
            </div>
          </div>
          <div className='footer__bottom'>
            <Socials contextClassItem='footer_socials_item' title='Мы в соцсетях' iconsSize='24' />
            <Payment />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;