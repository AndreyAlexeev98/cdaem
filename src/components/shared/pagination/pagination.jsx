import React, {useState, useEffect} from 'react';

const Pagination = ({countriesPerPage, totalCountries, paginate, currentPage, setCurrentPage }) => {

  const pageNumbers = [];
  const totalPageNumbers = Math.ceil(totalCountries / countriesPerPage)


  for (let i=1; i <= totalPageNumbers; i++ ) {
    pageNumbers.push(i)
  } 

  const prevPage = () => {if(currentPage !== 1){setCurrentPage(prev => prev - 1)}};
  const nextPage = () => {if(currentPage !== totalPageNumbers){setCurrentPage(prev => prev + 1)}};
  

  return (
    <div className='pagination'>
      <button className='pagination__btn pagination__btn-next' onClick={prevPage}>Prev Page</button>
      <ul className='pagination__list'>
        {
          pageNumbers.map(number => (
            <li className='pagination__item' key={number}>
              <a className='pagination__link' href="#" onClick={() => paginate(number)}>{number}</a>
            </li>
          ))
        }
      </ul>
      <button className='pagination__btn pagination__btn-prev' onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default Pagination; 