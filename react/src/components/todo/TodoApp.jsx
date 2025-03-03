import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // {id:1,name:"learning React"},
    // {id:2,name:"watching youtube"}
  ]);
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam",
  };
  const addNewTodo = (name) => {
    const newId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    const newTodo = {
      id: newId,
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">todolist</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
      <img src={reactLogo} alt="" />
    </div>
  );
};
export default TodoApp;
