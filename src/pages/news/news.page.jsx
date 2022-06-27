import { useParams } from "react-router-dom";
import BreadCrumbs from '../../components/shared/bread-crumbs/bread-crumbs.jsx';
import RECOMMENDAT from '../../data/recommendations-news.js';
import NEWS from '../../data/news-list';
import ShareComponent from "../../components/component-share/share.jsx";
import NewsListComponent from "../../components/news-list/news-list.jsx";

const newArrayReccomendat = [];
for (let i = 0; i <= 2; i++) {
  newArrayReccomendat.push(RECOMMENDAT[i]);
}

const NewsPage = () => {
  let {id} = useParams();
  const oneNews = NEWS.find((item)=> {
    return item.id === parseInt(id);
  })

  return (
    <div className="news-wrapper">
      <section className="news">
        <div className="news-wrapper__top">
          <div className="news__header">
            <BreadCrumbs />
            <div className="page-title news__title">{oneNews.title}</div>
            <div className='news__row'>
              <span className="news__date">{oneNews.date}</span>
              <ShareComponent />
            </div>
          </div>
        </div>
        <div className="news__main">
          <img src={oneNews.img} alt="Новость" className="news__img" />
          <div className="news__text">{oneNews.description}</div>
        </div>
        <div className="news__footer">
          <div className="container">
            <h3 className="news__subtitle">Читайте также</h3>
            <NewsListComponent news={newArrayReccomendat} loading={false}/>
          </div>
        </div>
        
      </section>
      <div className="news-wrapper__bottom">

      </div>
    </div>

  )
}

export default NewsPage; 