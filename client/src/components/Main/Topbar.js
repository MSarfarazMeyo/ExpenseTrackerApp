import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="add_btn p-2">
        <NavLink to="/Home" className="btn btn-success">
          Home
        </NavLink>
      </div>
      <div className="add_btn p-2">
        <NavLink to="/income" className="btn btn-primary">
          Income
        </NavLink>
      </div>
      <div className="add_btn p-2">
        <NavLink to="/expense" className="btn btn-danger">
          Expense
        </NavLink>
      </div>
    </div>
  );
};

export default Topbar;
