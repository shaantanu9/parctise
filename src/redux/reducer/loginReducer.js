import { LOGIN, LOGOUT } from "../actions/types";
const initialState = {
  isAuth: false,
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true, token: action.payload };
    case LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default reducer;
