import React from 'react';

const Main = () => {
  return (
    <main className="main container">
      <section className="news-list">
        <div className="bread-crumbs">
          <ul className="bread-crumbs__list">
            <li className="bread-crumbs__item bread-crumbs__item--first"><a className="bread-crumbs__link" href="#"></a></li>
            <li className="bread-crumbs__item"><a className="bread-crumbs__link" href="#">Новости</a></li>
            <li className="bread-crumbs__item"><a className="bread-crumbs__link" href="#">Линия Сталина: суровый отдых в усадьбах на сутки</a></li>
          </ul>
        </div>
        <div className="news-list__title">Новости</div>
      </section>
    </main>

  )
}

export default Main; 