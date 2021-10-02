import React from "react";
import "./Form.scss";
import { useState } from "react";

export const Form = () => {
  const [dataForm, setDataForm] = useState({ name: "", telefon: "" });

  const handleChange = (e) => {
    setDataForm((prevDataForm) => {
      return { ...prevDataForm, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/my-router/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForm),
    }).then((response) => console.log(response));
  };

  //  headers: { "Content-Type": "application/x-www-form-urlencoded" }  //для отправки с формы

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        Имя:
        <input
          autoComplete="off"
          type="text"
          name="name"
          className="input"
          onChange={handleChange}
          value={dataForm?.name}
          required
        />
      </label>
      <label className="label">
        Телефон:
        <input
          autoComplete="off"
          type="tel"
          name="telefon"
          className="input"
          onChange={handleChange}
          value={dataForm?.telefon}
          required
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};
