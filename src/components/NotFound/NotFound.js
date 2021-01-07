import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";

export const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h4 className="not-found">
      Sorry, but the page you have requested was not found. 🌑
      </h4>
      <NavLink to="/">
        <Button>Go Home ⬅️</Button>
      </NavLink>
    </div>
  )
};