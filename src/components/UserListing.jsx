import { connect } from "react-redux";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm("Do you want to remove?")) {
      props.removeUser(code);
      props.loadUser();
    }
  };

  return props.user.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.user.errMessage ? (
    <div>
      <h2>{props.user.errMessage}</h2>
    </div>
  ) : (
    <>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add User [+]
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-dark">
            <thead className="">
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {props.user.userList &&
                props.user.userList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(FetchUserList()),
    removeUser: (code) => dispatch(RemoveUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
