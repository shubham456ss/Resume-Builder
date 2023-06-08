import React from 'react'

const LangList = ({todos,onDeleteTodo}) => {
    
  return (
    <div>
      {todos.map(todo => (
        <li key={todo.id} style={{display:'inline',textAlign:'justify'}}>
          <Task
            todo={todo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </div>
  );
}

function Task({ todo, onDelete }) {

  return (
      <div onDoubleClick={() => onDelete(todo.id)} >
      {todo.title}
    </div>
  );
}
export default LangList