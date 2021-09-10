export const addToDo = (id, name, bangla, english, math) => {
  return {
    type: "ADDTODO",
    payload: {
      id: id,
      std_name: name,
      bangla: bangla,
      english: english,
      math: math,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETETODO",
    id,
  };
};

export const removeToDo = () => {
  return {
    type: "REMOVETODO",
  };
};
export const passed = () => {
  return {
    type: "PASSED",
  };
};
