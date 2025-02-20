const TodoData =(props) =>{
    const { name, age,data}= props;
    console.log("check props:", props)
    return (
      <div className='todo-data'>
        <div>my name is {props.name}</div>
        <div>learning react</div>
        <div>watching youtube</div>
      </div>
    )
}
export default TodoData