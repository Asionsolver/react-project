import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tables() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      // console.log(response);
      setColumns(Object.keys(response.data[0]));
      setRecords(response.data);
    });
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((response) => {
        console.log(response);
        alert("Data deleted successfully");
        setRecords(records.filter((record) => record.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col">
      <div className="my-5 text-2xl max-w-[470px] text-end text-purple-600 border-none">
        <button className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
          <Link to="/create">Create +</Link>
        </button>
      </div>

      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5  inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 ">
              {/* head */}
              <thead className="">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs  uppercase text-purple-600 font-bold"
                      key={index}
                    >
                      {column}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-start text-xs  uppercase text-purple-600 font-bold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {/* row 1 */}
                {records.map((record, index) => (
                  <tr className="bg-base-200" key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500 ">
                      {record.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {record.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {record.email}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        onClick={() => handleSubmit(record.id)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <Link
                        to={`/update/${record.id}`}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
