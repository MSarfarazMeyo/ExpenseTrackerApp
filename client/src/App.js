import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import Navbaar from "./components/Navbaar";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Home from "./components/Home";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Addincome from "./components/Addincome";
import Addexpense from "./components/Addexpense";
import EditExpense from "./components/EditExpense";
import Editincome from "./components/Editincome";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="Home" exact element={<Home />} />
          <Route path="addincome" element={<Addincome />} />
          <Route path="addexpense" element={<Addexpense />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expenses />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="expense/editexpense/:id" element={<EditExpense />} />
          <Route path="income/editincome/:id" element={<Editincome />} />
          <Route path="view/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import Navbaar from "./components/Navbaar";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Edit from "./components/Edit";
// import Details from "./components/Details";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbaar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/edit/:id" element={<Edit />} />
//         <Route path="/view/:id" element={<Details />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
