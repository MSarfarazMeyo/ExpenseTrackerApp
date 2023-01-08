import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Addincome = () => {
  const { udata, setUdata } = useContext(adddata);

  const history = useNavigate();

  const [inpval, setINP] = useState({
    title: "",
    ammount: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { title, ammount, desc } = inpval;

    const res = await fetch("http://localhost:8003/addexpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        ammount,
        desc,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      history("/expense");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div className="container">
      <NavLink to="/Home">home</NavLink>
      <div className="d-flex justify-content-center mb-5">
        <h3>Add New Expense</h3>
      </div>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="text"
              value={inpval.title}
              onChange={setdata}
              name="title"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Ammount
            </label>
            <input
              type="number"
              value={inpval.ammount}
              onChange={setdata}
              name="ammount"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              className="form-control"
              id=""
              cols="15"
              rows="2"
            ></textarea>
          </div>

          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Addincome;
