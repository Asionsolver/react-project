import { useState } from 'react';
import { getLength, getUsers } from './api/users';
import "./App.css";
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';
function App() {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  let totalPage = Math.ceil(getLength()/ limit);

  const handlePageChange = (value) => {
    // setPage(value);
    if(value === "&laquo;") {
      setPage(1);
    } else if(value === "&lsaquo;") {
      if(page !== 1) {
        setPage(page - 1);
      }
    } else if(value === "&rsaquo") {
      if(page !== totalPage) {
        setPage(page + 1);
      }
    } else if(value === "&raquo;" || value === "...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }
  return (
    <div className="container">
      <h1 className="App">List of all users data</h1>
      <Table users={getUsers(page, limit)}/>
      <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange}/> 
    </div>
  );
}

export default App;
