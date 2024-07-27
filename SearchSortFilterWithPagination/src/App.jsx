import axios from "axios";
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    // responsible for loading data from json server
    loadUserData();
  }, []);

  const loadUserData = async () => {
    // fetch data from json server with axios
    return await axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log("data", data);
  // console.log("value", value);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((error) => console.log(error));
  };

  const handleReset = async () => {
    loadUserData();
  };
  return (
    <MDBContainer>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Search Name..."
          onChange={(e) => setValue(e.target.value)}
        />

        <MDBBtn type="submit" color="primary">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
          Reset
        </MDBBtn>
      </form>
      <div style={{ marginTop: "100px" }}>
        <h2 className="text-center">
          Search, Filter, Sort and Pagination using JSON Fake Rest API
        </h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8}>No data found</td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>
                        <MDBBadge color="success">Active</MDBBadge>
                      </td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default App;
