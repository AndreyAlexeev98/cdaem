import { Link } from 'react-router-dom';

import IconArrow from '../shared/icons/Arrow/Arrow';

import style from "./News-link.module.scss";

const NewsLink = ( {news} ) => {

  const maxItemsView = 5;

  return (
    <section className={style.root}>
      <div className={style.title}>Новости</div>
      <ul className={style.list}>
        {
          news.slice(0, maxItemsView).map((item) => (
            <li className={style.item} key={item.id}>
              <Link to={`/news-list/${item.id}`} className={style.name}>{item.title}</Link>
              <div className={style.date}>{item.date}</div>
            </li>
          ))
        }
      </ul>
      <Link className={style.link} to='/news-list'>
        <span>Посмотреть все</span>
        <IconArrow className={style.link_icon} />
      </Link>
    </section>
  )
}

export default NewsLink;