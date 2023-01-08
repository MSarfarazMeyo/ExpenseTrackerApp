import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const user = localStorage.getItem("token");
  const initialValue = JSON.parse(user);

  console.log(initialValue);
  console.log(initialValue._id);
  console.log(initialValue.email);
  console.log(initialValue.password);
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const history = useNavigate();

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(
      `https://crudappreactjs.herokuapp.com/deleteuser/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      history("/");
    }
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center mt-5">
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <div className="d-flex justify-content-end mb-4">
                  <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                </div>
                <h3 className="mt-3">
                  Name: <span>{initialValue.firstName}</span>
                </h3>
                <h3 className="mt-3">
                  LastName: <span>{initialValue.lastName}</span>
                </h3>
              </div>
              <div className="right_view  col-lg-6 col-md-6 col-12 mt-4">
                <p className="mt-5">
                  <MailOutlineIcon />
                  Email: <span>{initialValue.email}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Details;
