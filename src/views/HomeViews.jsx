import React from "react";
import { useEffect, useState } from "react";

export const HomeViews = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/").then((response) => setPage(response));
  }, []);
  return <div>Добро пожаловать! {page}</div>;
};
