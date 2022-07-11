import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from './another-nav-list.module.scss';

const AnotherNavList = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.nav__list, props.contextClass)}>
        {props.list.map(el => (
          <li className={styles.nav__item} key={el.id}>
            <NavLink to={el.path} className={styles.nav__link}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AnotherNavList;