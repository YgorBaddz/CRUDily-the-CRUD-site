import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FuncUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
  const [id, idChange] = useState("0");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const userObj = useSelector((state) => state.user.userObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { id, name, email, phone, role };
    dispatch(FuncUpdateUser(userObj, id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if (userObj) {
      idChange(userObj.id);
      nameChange(userObj.name);
      emailChange(userObj.email);
      phoneChange(userObj.phone);
      roleChange(userObj.role);
    }
  }, [userObj]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Update User</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={id || ""}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name || ""}
                    onChange={(e) => nameChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email || ""}
                    onChange={(e) => emailChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone | ""}
                    onChange={(e) => phoneChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={role || ""}
                    onChange={(e) => roleChange(e.target.value)}
                    className="form-control"
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateUser;
