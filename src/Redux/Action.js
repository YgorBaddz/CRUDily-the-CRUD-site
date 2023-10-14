import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionTypes";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userList = res.data;
        dispatch(getUserList(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + code)
      .then((res) => {
        dispatch(deleteUser());
        toast.success("User removed successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FuncAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        dispatch(addUser());
        toast.success("User added successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FuncUpdateUser = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + code, data)
      .then((res) => {
        dispatch(updateUser());
        toast.success("User updated successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + code)
      .then((res) => {
        const userList = res.data;
        dispatch(getUserObj(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
