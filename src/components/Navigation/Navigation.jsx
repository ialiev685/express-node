import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <header className="header">
      <NavLink exact to="/" className="link" activeClassName="link active">
        Главная
      </NavLink>
      <NavLink to="/product" className="link" activeClassName="link active">
        Продукт
      </NavLink>
    </header>
  );
};
