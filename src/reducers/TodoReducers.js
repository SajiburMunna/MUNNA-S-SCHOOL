const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { std_name, bangla, english, math, id } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            std_name: std_name,
            bangla: bangla,
            english: english,
            math: math,
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

    // case "PASSED":
    //   const passed = state.list.filter(
    //     (p) => p.bangla >= 40 && p.english >= 40 && p.math >= 40
    //   );
    //   console.log(passed);
    //   return {
    //     ...state,
    //     list: passed
    //       ? state.list.map((obj) => ({ ...obj, Active: "false" }))
    //       : state.list.map((obj) => ({ ...obj, Active: "fyre" })),
    //   };
    default:
      return state;
  }
};

export default todoReducers;
