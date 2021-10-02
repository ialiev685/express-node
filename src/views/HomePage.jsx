import React from "react";
import { useEffect } from "react";

export const HomePage = () => {
  // const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/my-router").then((response) =>
      console.log(response)
    );
  }, []);
  return <div>Добро пожаловать! </div>;
};
