import { Link } from "react-router-dom";

import style from './News-list.module.scss'

const NewsListComponent = ({news, loading}) => {

  if(loading) {
    return <h3>Loading news list...</h3> 
  }

  return (
    <div>
      <ul className={style.news_list__list}>
        {
          news.map((item) => (
            <li className={style.news_list__item} key={item.id}>
              <div className={style.news_card}>
                <img className={style.news_card__img} src={item.img} alt="Новость" />
                <div className={style.news_card__content}>
                  <div className={style.news_card__title}>{item.title}</div>
                    <p className={style.news_card__desc}>{item.preview}</p>
                    <div className={style.news_card__footer}>
                      <div className={style.news_card__date}>{item.date}</div>
                      <Link to={`/news-list/${item.id}`} className={style.news_card__btn}>Читать</Link>
                    </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NewsListComponent