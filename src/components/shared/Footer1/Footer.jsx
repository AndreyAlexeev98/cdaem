import classNames from "classnames";

import Menu from '../Menu/Menu';
import MENU_FOOTER from '../../../data/menu-for-footer';
import MENU_FOOTER_OPEN from '../../../data/menu-for-footer-open';
import IconMainLogo from '../Main-logo/Main-logo';
import AnotherNavList from '../Another-nav-list/Another-nav-list';
import NAV_FOR_FOOTER from '../../../data/nav-for-footer';
import Requisites from '../../Requisites/Requisites';
import Socials from '../Socials/Socials';
import Payment from '../../Payment/Payment';

import style from './Footer.module.scss'

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
            <Socials contextClassItem={style.footer_socials_item} title='Мы в соцсетях' width='24' height='24' />
            <Payment />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;