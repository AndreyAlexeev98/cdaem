import { Link } from "react-router-dom";
import classnames from 'classnames';

import styles from './bread-crumbs.module.scss';


const BreadCrumbs = () => {
  return (
    <div className={styles.bread_crumbs}>
      <ul className={styles.bread_crumbs__list}>
        <li className={ classnames(styles.bread_crumbs__item, styles.bread_crumbs__item_first) }><Link to='/' className={styles.bread_crumbs__link}></Link></li>
        <li className={styles.bread_crumbs__item}><Link to='/news-list' className={styles.bread_crumbs__link}>Новости</Link></li>
        <li className={styles.bread_crumbs__item}><span className={styles.bread_crumbs__link}>Линия Сталина: суровый отдых в усадьбах на сутки</span></li>
      </ul>
   </div>
  )
}

export default BreadCrumbs