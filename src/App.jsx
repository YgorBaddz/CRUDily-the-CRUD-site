import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserListing from "./components/UserListing";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <>
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}>
              <h3>
                <span>CRUD</span>ily
              </h3>
            </Link>
            <div className="navbar">
              <Link to={"/"}>Home</Link>
              <Link to={"/user"}>User</Link>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<UserListing></UserListing>}></Route>
            <Route path="/user/add" element={<AddUser></AddUser>}></Route>
            <Route
              path="/user/edit/:code"
              element={<UpdateUser></UpdateUser>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
        ></ToastContainer>
        <div className="footer">
          <div>©2023 YgorBaddz. All rights reserved.</div>
          <div></div>
        </div>
      </>
    </Provider>
  );
}

export default App;
