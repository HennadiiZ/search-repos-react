import classes from './Pagination.module.css';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className={classes.pagination}>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
         <li  key={number} className={currentPage === number ? classes.active : ''}>
            <button
              className={`${currentPage === number ? classes.active : ''}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;