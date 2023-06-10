import { LOGIN_USER_FAILED, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../types/user";

const initialState = {
  token: "",
  user: null,
  loading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading : true
      }
    case LOGIN_USER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        loading:false,
  token:action.payload.body.token
      }
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading:false
      }
    
    default:
      return state;
  }
};

export default userReducer;
