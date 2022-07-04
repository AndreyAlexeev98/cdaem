import { Link } from "react-router-dom";

const NewsListComponent = ({news, loading}) => {

  if(loading) {
    return <h3>Loading news list...</h3> 
  }

  return (
    <div>
      <ul className='news-list__list'>
        {
          news.map((item, i) => (
            <li className='news-list__item' key={item.id}>
              <div className='news-card'>
                <img className='news-card__img' src={item.img} alt="Новость" />
                <div className='news-card__content'>
                  <div className='news-card__title'>{item.title}</div>
                    <p className='news-card__desc'>{item.preview}</p>
                    <div className='news-card__footer'>
                      <div className='news-card__date'>{item.date}</div>
                      <Link to={`/news-list/${item.id}`} className='news-card__btn'>Читать</Link>
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