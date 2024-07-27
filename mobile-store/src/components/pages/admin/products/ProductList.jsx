import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("http://localhost:3000/products?_sort=id&_order=asc")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Something went wrong");
      })
      .then((products) => setProducts(products))
      .catch(() => alert("Unable to fetch products"));
  }

  useEffect(getProducts, []);
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> Products</h2>

      <div className="row mb-3">
        <div className="col">
          <Link to="/admin/products/create" className="btn btn-primary me-1">
            Create Product
          </Link>
          <button className="btn btn-outline-primary" type="btn" onClick={getProducts}>
            Refresh
          </button>
        </div>

        <div className="col"></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Create At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}$</td>
              <td>
                <img
                  src={"http://localhost:3000/images/" + product.imageFilename}
                  alt={product.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{product.createdAt}</td>
              <td style={{width: "10px" ,whiteSpace:"nowrap"}}>
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  className="btn btn-sm btn-warning me-1"
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
