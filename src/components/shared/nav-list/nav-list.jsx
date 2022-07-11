import { NavLink } from "react-router-dom"
import classNames from "classnames";

import IconPointer from '../icons/pointer/pointer.jsx';

import styles from './nav-list.module.scss';

const NavList = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.nav__list, props.contextClass)} >
        {
          props.list.map((item) => (
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