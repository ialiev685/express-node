import React from "react";
import data from "../../data/cars.json";
import "./ProductList.scss";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <ul className="list">
      {data.map(({ id, name }) => (
        <li className="item" key={id}>
          <Link to={`/product/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
