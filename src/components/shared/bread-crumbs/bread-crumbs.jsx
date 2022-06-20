import React, {useState, useEffect} from 'react';

const BreadCrumbs = () => {
  return (
    <div className="bread-crumbs">
      <ul className="bread-crumbs__list">
        <li className="bread-crumbs__item bread-crumbs__item--first"><a className="bread-crumbs__link" href="#"></a></li>
        <li className="bread-crumbs__item"><a className="bread-crumbs__link" href="#">Новости</a></li>
        <li className="bread-crumbs__item"><a className="bread-crumbs__link" href="#">Линия Сталина: суровый отдых в усадьбах на сутки</a></li>
      </ul>
   </div>
  )
}

export default BreadCrumbs