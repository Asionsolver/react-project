import { Footer, Navbar } from "./components/Layout";
import { Contact } from './components/pages/Contact';
import { Home } from "./components/pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './components/pages/NotFound';
import { ProductList } from './components/pages/admin/products/ProductList';
import { CreateProduct } from './components/pages/admin/products/CreateProduct';
import { EditProduct } from './components/pages/admin/products/EditProduct';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
