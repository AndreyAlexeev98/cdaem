import React, {useState, useEffect} from 'react';
import imagePreview from '../../../images/pictures/news-preview.png';
import BreadCrumbs from '../../shared/bread-crumbs/bread-crumbs.jsx';
import NewsListList from '../../shared/news-list/news-list.jsx';
import NewsListData from '../../../data/news-list.js';
import Pagination from '../../shared/pagination/pagination.jsx';

const NewsListPage = () => {

  const [countries, setCountries] = useState([]); // создаем состояние, где будет храниться список новостей
  const [loading, setLoading] = useState(false);  // создаем состояние для загрузки
  const [currentPage, setCurrentPage] = useState(1);  // состояние отображаемой (текущей) страницы
  const [countriesPerPage] = useState(9);  // состояние количество отображаемых элементов на одной странице

  // Получаем наши все элементы

  useEffect(() => {
    const getCountries = () => {
      setLoading(true)
      setCountries(NewsListData);
      setLoading(false)
    } 
    getCountries() 
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  // const prevPage = () => {if(currentPage !== 1){setCurrentPage(prev => prev - 1)}} 
  // const nextPage = () => {if(currentPage !== 3){setCurrentPage(prev => prev + 1)}}

  const prevPage = () => console.log(currentPage)

  /* функционал переключения листов пагинации
    const prevPage = () => {if(currentPage !== 1){setCurrentPage(prev => prev - 1)}} 
    const nextPage = () => {if(currentPage !== 1){setCurrentPage(prev => prev + 1)}}
   <button className='pagination__btn-prev' onClick={prevPage}>Prev Page</button>
   <button className='pagination__btn-next' onClick={nextPage}>Next Page</button>*/

  return (
    <section className="news-list">
      <BreadCrumbs />
      <div className="page-title news-list__title">Новости</div>
      <NewsListList countries={currentCountry} loading={loading}/>
      <div className='news-list__pagination'>
        <Pagination 
          countriesPerPage={countriesPerPage} 
          totalCountries={countries.length} 
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