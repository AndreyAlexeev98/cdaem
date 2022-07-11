import classNames from "classnames";

import Menu from '../menu/menu.jsx';
import MENU_FOOTER from '../../../data/menu-for-footer.js';
import MENU_FOOTER_OPEN from '../../../data/menu-for-footer-open.js';
import IconMainLogo from '../main-logo/main-logo.jsx';
import AnotherNavList from '../another-nav-list/another-nav-list.jsx';
import NAV_FOR_FOOTER from '../../../data/nav-for-footer.js';
import Requisites from '../../requisites/requisites.jsx';
import Socials from '../socials/socials.jsx';
import Payment from '../../payment/payment.jsx';

import style from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={classNames(style.footer__container, "container")}>
        <div className={style.footer__left}>
          <IconMainLogo name='сдаем бай' contextClass={style.logo} />
          <Requisites />
        </div>
        <div className={style.footer__right}>
          <div className={style.footer__top}>
            <Menu list={ MENU_FOOTER } contextClass={style.menu_position} />
            <div className={style.opened_menu}>
              <div className={style.opened_menu__title}>Квартиры</div>
              <ul className={style.opened_menu__list}>
                {
                  MENU_FOOTER_OPEN.map(el => <li className={style.opened_menu__item} key={el.id}><a href='#' className={style.opened_menu__link}>{el.name}</a></li>)
                }
              </ul>
            </div>
            <div className={style.footer__nav}>
              <AnotherNavList list={ NAV_FOR_FOOTER } contextClass={style.nav_position} />
            </div>
          </div>
          <div className={style.footer__bottom}>
            <Socials contextClassItem={style.footer_socials_item} title='Мы в соцсетях' iconsSize='24' />
            <Payment />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;