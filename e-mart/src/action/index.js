export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
export const addCart = (data) => {
  return {
    type: "ADD_CART",
    payload: data,
  };
};
// export const removeUser = (data) => {
//   return {
//     type: "REMOVE_USER",
//     payload: data,
//   };
// };
