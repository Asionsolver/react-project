import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [rowToEdit, setRowToEdit] = useState();
  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page",
      status: "live",
    },
    {
      page: "About",
      description: "This is the about page",
      status: "draft",
    },
    {
      page: "Contact",
      description: "This is the contact page",
      status: "error",
    },
    {
      page: "Services",
      description: "This is the services page",
      status: "live",
    },
    {
      page: "Blog",
      description: "This is the blog page",
      status: "draft",
    },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleSubmit = (formData) => {
    if (rowToEdit === null){
      setRows([...rows, formData]);
     
    }else{
      setRows(rows.map((currentRow, index) => {
        if(index !== rowToEdit){
          return currentRow;
        } else {
          return formData;
        }
      }))
    }
    setShowModal(false);
    
  };

  const handleEditRow = (targetIndex) => {
    setRowToEdit(targetIndex);
    setShowModal(true);
  };
  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className="btn" onClick={() => setShowModal(true)}>
        Add
      </button>
      {showModal && (
        <Modal
          onSubmit={handleSubmit}
          closeModal={() => {
            setShowModal(false);
          }}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
