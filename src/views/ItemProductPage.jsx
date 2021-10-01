import React from "react";
import { Link, useParams, useRouteMatch, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ItemProductPage = () => {
  const { id } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/product/:${id}`).then((response) =>
      console.log(response)
    );
  }, [id]);

  const priceUrl = new URLSearchParams(location.search).toString(); //выводит строку ?query=0

  useEffect(() => {
    if (!priceUrl) return;

    fetch(`http://localhost:5000/product/:${id}?${priceUrl}`).then((response) =>
      console.log(response)
    );
  }, [id, priceUrl]);

  return (
    <div>
      <h1>Машина ВАЗ</h1>
      <Link to={{ pathname: url, search: "?price=0" }}>Цена</Link>
    </div>
  );
};
