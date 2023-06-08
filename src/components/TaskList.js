import React from 'react';

const TaskList=({
  todos,
  onChangeTodo,
  onDeleteTodo,
}) =>{
  return (
    <div>
      {todos.map(todo => (
        <li key={todo.id} style={{display:'inline',textAlign:'justify'}}>

          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </div>
  );
}

function Task({ todo, onDelete }){

  return (
      <div onDoubleClick={() => onDelete(todo.id)} >
      {todo.title}
      {/* <FontAwesomeIcon icon={faCircleXmark} />*/}
    </div>
  );
}

export default TaskList