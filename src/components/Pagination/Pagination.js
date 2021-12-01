const Pagination = (props) => {

  const { page, previous, next } = props;



  return (
    <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item"><a className="page-link" href={previous}>Previous</a></li>
      <li className="page-item"><a className="page-link" href={page}>{page}</a></li>
      <li className="page-item"><a className="page-link" href={page}>{page + 1}</a></li>
      <li className="page-item"><a className="page-link" href={page}>{page + 2}</a></li>
      <li className="page-item"><a className="page-link" href={next}>Next</a></li>
    </ul>
  </nav>
  )
}

export default Pagination;