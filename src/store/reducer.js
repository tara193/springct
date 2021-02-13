import types from "./actions";
const initialState = {
  //   user: {
  //     userName: null,
  //     userId: null,
  //     phoneNumber: null,
  //     address: null,
  //     role: null,
  //     name: null,
  //   },
  userList: [],
  error: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER_REQUEST:
      return { ...state, loading: true };
    case types.ADD_USER_SUCCESS:{
        console.log(action);
      return {
        ...state,
        loading: false,
        userList: [...state.userList, action.payload]
      };}
    case types.ADD_USER_FAILURE:
      return { ...state, loading: false, error: "Unable to add User" };
    case types.USER_LIST_REQUEST:
      return { ...state, loading: true };
    case types.USER_LIST_SUCCESS:
      return { ...state, userList:[...state.userList], loading: false };
    case types.USER_LIST_FAILURE:
      return { ...state, loading: false, error: "Unable to fetch user" };
    default:
      return state;
  }
};

export default reducer;
