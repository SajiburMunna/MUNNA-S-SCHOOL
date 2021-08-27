import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../actions";

import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState(" ");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  console.log(list);
  return (
    <>
      <div>
        <div>
          <h1>Here Your List...📜</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="✍ Add ToDo..."
            value={inputData}
            onChange={(evant) => setInputData(evant.target.value)}
          />
          <button
            onClick={() => dispatch(addToDo(inputData), setInputData(""))}
          >
            add
          </button>
        </div>
      </div>

      {list.map((p) => (
        <div>
          <h3>
            {p.data}
            <button onClick={() => dispatch(deleteToDo(p.id))}>✂</button>
          </h3>
        </div>
      ))}

      <button onClick={() => dispatch(removeToDo())}>Remove All</button>
    </>
  );
};

export default Todo;
