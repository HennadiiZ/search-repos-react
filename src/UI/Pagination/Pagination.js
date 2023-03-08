const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  //
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }
  //

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
        <li className="page-item" key={number}>
        {/*  <li className="page-item" key={number} className={currentPage === pageNumber ? 'active' : ''}> */}
            <button
              className={`page-link ${number === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
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