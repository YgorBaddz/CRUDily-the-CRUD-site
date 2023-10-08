import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionTypes";

const initialState = {
  loading: true,
  userList: [],
  userObj: {},
  errMessage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
      };

    case GET_USER_LIST:
      return {
        loading: false,
        errMessage: "",
        userList: action.payload,
        userObj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userObj: action.payload,
      };
    default:
      return state;
  }
};
