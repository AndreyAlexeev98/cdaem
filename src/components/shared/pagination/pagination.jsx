import React, {useState, useEffect} from 'react';

const Pagination = ({countriesPerPage, totalCountries }) => {

  const pageNumbers = [];

  for (let i=1; i <= Math.ceil(totalCountries / countriesPerPage); i++ ) {
    pageNumbers.push(i)
  } 

  return (
    <div className='pagination'>
      <ul className='pagination__list'>
        {
          pageNumbers.map(number => (
            <li className='pagination__item' key={number}>
              <a className='pagination__link' href="#">{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination; 