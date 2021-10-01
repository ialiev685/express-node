import React from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  // const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/product").then((response) =>
      console.log(response)
    );
  }, []);
  return <ProductList />;
};
