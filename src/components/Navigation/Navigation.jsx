import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <header className="header">
      <NavLink
        exact
        to="/my-router"
        className="link"
        activeClassName="link active"
      >
        Главная
      </NavLink>
      <NavLink
        to="/my-router/product"
        className="link"
        activeClassName="link active"
      >
        Продукт
      </NavLink>
      <NavLink
        to="/my-router/callback"
        className="link"
        activeClassName="link active"
      >
        Заказать звонок
      </NavLink>
    </header>
  );
};
