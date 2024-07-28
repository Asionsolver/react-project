import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
export const EditProduct = () => {
    const [validationErrors, setValidationErrors] = useState({});
    const [initialData, setInitialData] = useState({});
    const params = useParams();
    const navigate = useNavigate();


    function getProduct() {
        fetch("http://localhost:3000/products/" + params.id)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Unable to fetch data");
            })
            .then(data => {
                setInitialData(data);
            })
            .catch(
                alert("Unable to read the product details");
            );
    }

    useEffect(getProduct, []);

     const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData.entries());
        // console.log(product);

        if(!product.name || !product.brand || !product.category || !product.price || !product.description) {
            return alert("Please fill all fields");
        }

        // alert("Product created successfully");
        try {
            const response = fetch("http://localhost:3000/products" + params.id, {
                method: "PATCH",
                body: formData
            })
            const data = await response.json();

            if(response.ok) {
                alert("Product created successfully");
                navigate("/admin/products");
            } else if(response.status === 400) {
                setValidationErrors(data);
            } else {
                alert("Unable to update the product");
            }

        } catch (error) {
            alert("Unable to connect to server");
        }

    };
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2 className="text-center mb-5">Edit Product</h2>
          <div className="row mb-2">
              <label htmlFor="" className="col-sm-4 col-form-label">
                ID
              </label>
              <div className="col-sm-8">
                <input readOnly type="text" className="form-control" defaultValue={params.id}/>
                
              </div>
            </div>

          { initialData &&
            <form onSubmit={handleSubmit}>
            <div className="row mb-2">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Name
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name="name" defaultValue={initialData.name}/>
                <span className="text-danger">{validationErrors.name}</span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Brand
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name="brand" defaultValue={initialData.brand}/>
                <span className="text-danger">{validationErrors.brand}</span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Category
              </label>
              <div className="col-sm-8">
                <select name="category" id="" className="form-select" defaultValue={initialData.category}>
                  <option value="other">Other</option>
                  <option value="Phones">Phones</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Cameras">Cameras</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Monitors">Monitors</option>
                  <option value="Printers">Printers</option>
                  <option value="Network">Network</option>
                  <option value="Storage">Storage</option>
                </select>
                <span className="text-danger">{validationErrors.category}</span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Price
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="price"
                  type="number"
                  step="0.01"
                  min="1"
                    defaultValue={initialData.price}
                />
                <span className="text-danger">{validationErrors.price}</span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Description
              </label>
              <div className="col-sm-8">
                <input className="form-control" name="description" rows="4" 
                    defaultValue={initialData.description}
                />
                <span className="text-danger">{validationErrors.description}</span>
              </div>
            </div>

            <div className="row mb-3">
              
              <div className="offset-sm-4 col-sm-8">
                <img src={"http://localhost:3000/images" + initialData.imageFilename} alt="..." className="img-fluid" width="150"/>
                
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Image
              </label>
              <div className="col-sm-8">
                <input type="file" className="form-control" name="image" 
                    defaultValue={initialData.image}
                />
                <span className="text-danger">{validationErrors.image}</span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Created At
              </label>
              <div className="col-sm-8">
                <input readOnly type="file" className="form-control-plaintext" defaultValue={initialData.createdAt}/>
                
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 offset-sm-4 d-grid">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid">
                <Link
                  className="btn btn-secondary"
                  to="/admin/products"
                  role="button"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
           }
        </div>
      </div>
    </div>
  );
};
