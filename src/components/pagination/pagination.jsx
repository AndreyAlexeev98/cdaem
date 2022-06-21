import { Link } from "react-router-dom";
const Pagination = ({newsPerPage, totalNews, paginate, currentPage, setCurrentPage }) => {

  const pageNumbers = [];
  const totalPageNumbers = Math.ceil(totalNews / newsPerPage)


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
              <Link className='pagination__link' to='#' onClick={() => paginate(number)} >{number}</Link>
            </li>
          ))
        }
      </ul>
      <button className='pagination__btn pagination__btn-prev' onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default Pagination; 