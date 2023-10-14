import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FuncAddUser } from "../Redux/Action";

const AddUser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { name, email, phone, role };
    dispatch(FuncAddUser(userObj));
    navigate("/user");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => nameChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => emailChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
