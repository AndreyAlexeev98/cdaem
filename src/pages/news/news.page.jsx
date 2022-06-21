import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useSearchParams, useLocation, Outlet} from "react-router-dom";
import imagePreview from '../../images/pictures/news-preview.png';
import BreadCrumbs from '../../components/shared/bread-crumbs/bread-crumbs.jsx';
import NewsListComponent from '../../components/news-list/news-list.jsx';
import NewsListData from '../../data/news-list.js';
import Pagination from '../../components/pagination/pagination.jsx';

const NewsPage = () => {
  return (
    <section className="news">
      <BreadCrumbs />
      <div className="page-title">Страница с новостью</div>
      <Link to='/'>Перейти к списку</Link>
      <div className='news-list__pagination'>
      </div>
    </section>
  )
}

export default NewsPage; 