import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://bgapp.up.railway.app/")
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>BigCommerce Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
