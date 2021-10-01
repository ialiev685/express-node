import React from "react";
import { useEffect, useState } from "react";

export const ProductViews = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/product").then((response) =>
      setPage(response)
    );
  }, []);
  return <div>Наш продукт{page}</div>;
};
