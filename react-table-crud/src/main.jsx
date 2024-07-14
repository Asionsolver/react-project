import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import { CreateData } from './components/CreateData';
import "./index.css";
import { Edit } from './components/Edit';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create" element={<CreateData/>}/>
        <Route path="/update/:id" element={<Edit/>}/>
      </Routes>
    </React.StrictMode>
  </Router>
);
