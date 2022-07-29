import { NavLink } from "react-router-dom"
import classNames from "classnames";

import IconPointer from '../icons/Pointer/Pointer';

import styles from './Nav-list.module.scss';

const NavList = ( { list, contextClass } ) => {
  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.nav__list, contextClass)} >
        {
          list.map((item) => (
            <li className={styles.nav__item} key={item.id}>
              <NavLink to={item.path} className={styles.nav__link}>
                <div className={styles.nav__name}>
                  {item.type === 'map' && <IconPointer className={styles.nav__icon}/>}
                  <span>{item.name}</span> 
                </div>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavList;