import {useState, useEffect} from 'react';
import classnames from 'classnames';

import BreadCrumbs from '../../components/shared/Bread-crumbs/Bread-crumbs';
import NewsListComponent from '../../components/News-list/News-list';
import NewsListData from '../../data/news-list.js';
import Pagination from '../../components/Pagination/Pagination';

import style from './News-list.page.module.scss';

const NewsListPage = () => {

  const [news, setNews] = useState([]); // создаем состояние, где будет храниться список новостей
  const [loading, setLoading] = useState(false);  // создаем состояние для загрузки
  const [currentPage, setCurrentPage] = useState(1);  // состояние отображаемой (текущей) страницы
  const [newsPerPage] = useState(9);  // состояние количество отображаемых элементов на одной странице

  // Получаем наши все элементы

  useEffect(() => {
    const getNews = () => {
      setLoading(true)
      setNews(NewsListData);
      setLoading(false)
    } 
    getNews() 
  }, [])

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className={classnames(style.news_list, 'container')}>
      <BreadCrumbs />
      <div className={classnames('page-title', style.news_list__title)}>Новости</div>
      <NewsListComponent news={currentNews} loading={loading}/>
      <div className={style.news_list__pagination}>
        <Pagination 
          newsPerPage={newsPerPage} 
          totalNews={news.length} 
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={style.news_list__search}>
        <div className={style.search_news}>
          <div className={style.search_news__input_wrapper}>
            <input className={style.search_news__input} type="text" placeholder='Поиск по статьям' />
            <button className={style.search_news__btn} type="button">
              <span />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsListPage; 