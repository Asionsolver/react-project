/* eslint-disable react/prop-types */
import { returnPaginationRange } from "../utils/appUtils";

export const Pagination = (props) => {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <ul className="pagination pagination-md justify-content-end">
      <li className="page-item">
        <span
          onClick={() => props.onPageChange("&laquo;")}
          className="page-link"
        >
          &laquo;
        </span>
      </li>
      <li className="page-item">
        <span
          onClick={() => props.onPageChange("&lsaquo;")}
          className="page-link"
        >
          &lsaquo;
        </span>
      </li>
      {array.map((item) => {
        if (item === props.page) {
          return (
            <li key={item} className="page-item active">
              <span
                onClick={() => props.onPageChange(item)}
                className="page-link"
              >
                {item}
              </span>
            </li>
          );
        } else {
          return (
            <li key={item} className="page-item">
              <span
                onClick={() => props.onPageChange(item)}
                className="page-link"
              >
                {item}
              </span>
            </li>
          );
        }
      })}
      <li className="page-item">
        <span
          onClick={() => props.onPageChange("&rsaquo")}
          className="page-link"
        >
          &rsaquo;
        </span>
      </li>
      <li className="page-item">
        <span
          onClick={() => props.onPageChange("&raquo;")}
          className="page-link"
        >
          &raquo;
        </span>
      </li>
    </ul>
  );
};
