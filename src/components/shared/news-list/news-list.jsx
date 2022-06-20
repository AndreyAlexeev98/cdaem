import React from "react";

const NewsListList = ({countries, loading}) => {

  if(loading) {
    return <h2>Loading news list...</h2> 
  }

  return (
    <div>
      <ul className='news-list__list'>
        {
          countries.map((item, i) => (
            <li className='news-list__item' key={item.id}>
              <div className='news-card'>
                <img className='news-card__img' src={item.img} alt="Новость" />
                <div className='news-card__content'>
                  <div className='news-card__title'>{item.title}</div>
                    <p className='news-card__desc'>{item.description}</p>
                    <div className='news-card__footer'>
                      <div className='news-card__date'>{item.date}</div>
                      <a href="#" className='news-card__btn'>Читать</a>
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

export default NewsListList