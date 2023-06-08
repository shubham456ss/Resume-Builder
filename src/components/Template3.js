import React from 'react'
import  '../static/temp3.css';
import TaskList from './TaskList';
import LangList from './LangList';
import EduList from './Edulist';
import chris from './chris.jpg';
import EmpHistory from './EmpHistory';


const Template3 = (props) => {

return (
<div className='fullpage3' >
      <div className="rela" ref={props.objGetData.ref} >
        <div className="top-bar">
            <div className="name">{props.objSetData.firstname }</div>
        </div>

        
        <div className="side-bar">
            <div className="mugshot">
              <img className="logo" style={{  margin:'auto',width:'100px',height:'100px' ,border:'2px solid black'}} src={props.objSetData.image || chris} alt='User-Profile-pic' />
            </div>
            <p>{props.objSetData.city}</p>
            <p>{props.objSetData.address}</p>
            <p>{props.objSetData.postal}</p>
            <p>{props.objSetData.email}</p>
            <p className="headEdu">Expertise</p>
            <TaskList todos={props.objSetData.todos}onDeleteTodo={props.objGetData.handleDeleteTodo}/>
            <p className="headEdu">Education</p>
            <EduList todos={props.objSetData.eduList} onDeleteTodo={props.objGetData.handleDeleteEdu}/>
            <p className="headEdu">Language</p>
            <LangList todos={props.objSetData.langList} onDeleteTodo={props.objGetData.handleDeleteLanguage}/>

        </div>
        <div className="content-container">
            <h3 className="heads">{props.objSetData.occupation}</h3>
            <div className="separator"></div>
            <div className="levels">Profile</div>
            <p className="long-margin">{props.objSetData.profile}</p>
            <div className="levels">Experience</div>

            <EmpHistory emps={props.objSetData.empHistory} emptitle={props.objSetData.empTitle} onDeleteTodo={props.objGetData.handleDeleteEmp}/>
        </div>
      </div>
</div>
  )
}

export default Template3


