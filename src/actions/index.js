export const addToDo = (data) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteToDo = () => {
  return {
    type: "DELETETODO",
  };
};

export const removeToDo = () => {
  return {
    type: "REMOVETODO",
  };
};
