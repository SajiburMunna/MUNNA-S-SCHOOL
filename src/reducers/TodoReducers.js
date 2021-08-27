const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { data, id } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETETODO":
      const newList = state.list.filter((elm) => elm.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVETODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducers;
