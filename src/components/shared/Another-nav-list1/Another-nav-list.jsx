import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from './Another-nav-list.module.scss';

const AnotherNavList = ( { contextClass, list } ) => {
  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.nav__list, contextClass)}>
        {list.map(el => (
          <li className={styles.nav__item} key={el.id}>
            <NavLink to={el.path} className={styles.nav__link}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AnotherNavList;