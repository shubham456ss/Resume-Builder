import React from 'react'

const EmpHistory = ({emps,emptitle,onDeleteTodo}) => {
    
    return (
      <div>
        {emps.map(emp => (
          <li key={emp.id} style={{display:'inline'}}>
            <Task
              emp={emp}
              emptitle={emptitle}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </div>
    );
  }
  
  function Task({emp,emptitle, onDelete }){
  
    return (
        <div onDoubleClick={() => onDelete(emp.id)} >
        <h6 style={{fontWeight:'bold',margin:'10px auto 10px auto'}}>{emptitle}</h6>
        <p style={{marginBottom:'5px'}}>{emp.work}</p>
      </div>
    );
  }
  export default EmpHistory