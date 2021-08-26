const initalState = {
  list: [],
};
const toDoList = (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default toDoList;
