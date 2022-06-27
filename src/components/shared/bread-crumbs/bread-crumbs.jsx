import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <div className="bread-crumbs">
      <ul className="bread-crumbs__list">
        <li className="bread-crumbs__item bread-crumbs__item--first"><Link to='/' className="bread-crumbs__link"></Link></li>
        <li className="bread-crumbs__item"><Link to='/news-list' className="bread-crumbs__link">Новости</Link></li>
        <li className="bread-crumbs__item"><Link to='/news-list/newsid' className="bread-crumbs__link">Линия Сталина: суровый отдых в усадьбах на сутки</Link></li>
      </ul>
   </div>
  )
}

export default BreadCrumbs