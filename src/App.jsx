import { BrowserRouter, Routes } from "react-router-dom";
import Product from "./pages/Product";


export default function App() {
  //define our routes in jsx
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product/>}
      </Routes>
    </BrowserRouter>
  );
}

//define our routes in jsx
