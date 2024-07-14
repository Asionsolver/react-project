/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit , defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue||{
    page: "",
    description: "",
    status: "live",
  });

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onSubmit(formState);
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.classList.contains("modal-container")) {
          closeModal();
        }
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page" className="page">
              Page
            </label>
            <input name="page" value={formState.page} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="page">
              Description
            </label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status" className="page">
              Status
            </label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        s
      </div>
    </div>
  );
};
