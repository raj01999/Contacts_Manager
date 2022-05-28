export const actionType = {
  ADD_USER: "add user",
  ADD_CONTACT: "add contact",
  ADD_MARK: "add marked filed",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...state, user: action.payload.user };

    case actionType.ADD_CONTACT:
      return {
        ...state,
        contact: action.payload.contact,
      };
    case actionType.ADD_MARK:
      const newMark = state.mark;
      if (newMark[action.payload.id]) {
        delete newMark[action.payload.id];
      } else {
        newMark[action.payload.id] = 1;
      }

      return {
        ...state,
        mark: newMark,
      };

    default:
      return state;
  }
};

export default reducer;
