import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
const App =() =>{
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  const addNewTodo =()=>{
    alert('call me ')
  }
  return(
    <div className="todo-container">
      <div className="todo-title">todolist</div>
      <TodoNew/>
      <TodoData
      name ={hoidanit}
      age ={age}
      data ={data}
      addNewTodo={addNewTodo()}
      />
      <img src={reactLogo} alt="" />
    </div>
  )
}
export default App
