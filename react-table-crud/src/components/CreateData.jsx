import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const CreateData = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    axios
      .post("http://localhost:3000/users", inputData)
      .then((response) => {
        console.log(response);
        alert("Data created successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex  flex-col items-center justify-center  space-y-3">
      <h1 className="text-3xl font-semibold text-purple-600">Create Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Enter Your name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600"
            placeholder="Name"
            name="name"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Enter Your Email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            name="email"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>

        <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 ">
          Submit
        </button>
      </form>
    </div>
  );
};
