import React from "react";
import { useEffect, useState } from "react";

export const HomePage = () => {
  // const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/").then((response) => console.log(response));
  }, []);
  return <div>Добро пожаловать! </div>;
};
