/* eslint-disable react/prop-types */
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./Table.css";


export const Table = ({ rows, deleteRow, editRow}) => {


  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="">Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={index}>
                <td>{row.page}</td>
                <td>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
                    />
                    <BsFillPencilFill onClick={()=>editRow(index)}/>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
