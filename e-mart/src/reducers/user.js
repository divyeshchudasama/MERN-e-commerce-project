const initialState = {};
const addUserData = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    return action.payload;
  }
  return state;
};
export default addUserData;
