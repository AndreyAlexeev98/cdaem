import {useState, useEffect} from 'react';
import BreadCrumbs from '../../components/shared/bread-crumbs/bread-crumbs.jsx';
import NewsListComponent from '../../components/news-list/news-list.jsx';
import NewsListData from '../../data/news-list.js';
import Pagination from '../../components/pagination/pagination.jsx';

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
    <section className="news-list">
      <BreadCrumbs />
      <div className="page-title news-list__title">Новости</div>
      <NewsListComponent news={currentNews} loading={loading}/>
      <div className='news-list__pagination'>
        <Pagination 
          newsPerPage={newsPerPage} 
          totalNews={news.length} 
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className='news-list__search'>
        <div className='search-news'>
          <div className='search-news__input-wrapper'>
            <input className='search-news__input' type="text" placeholder='Поиск по статьям' />
            <button className='search-news__btn' type="button">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsListPage; 