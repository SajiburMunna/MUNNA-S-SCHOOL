import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState(" ");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Here Your List...📜</h1>
        <div>
          <input
            type="text"
            placeholder="✍ Add Todo ..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => dispatch(addToDo(inputData), setInputData(" "))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
