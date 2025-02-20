const TodoNew =() =>{
  const handelClick = () =>{
    alert("click me")
  }  
  const handelOnChange = (event) =>{
    console.log(">>>handelpnchange", event.target.value)
  }
  return (
        <div className="todo-new">
        <input
         type="text" name="" id=""
         onChange={handelOnChange} />
        <button 
        style={{cursor:"pointer"}}
        onClick={handelClick}
        >add</button>
      </div>
    )
}
export default TodoNew