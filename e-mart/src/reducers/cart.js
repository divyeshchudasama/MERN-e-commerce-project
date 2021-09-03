const initialState = 0;
const addCartData = (state = initialState, action) => {
  if (action.type === "ADD_CART") {
    return action.payload;
  }
  return state;
};
export default addCartData;
