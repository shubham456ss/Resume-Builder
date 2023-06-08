import React,{useRef} from  'react'
import '../static/temp2.css'
import TaskList from './TaskList'
import LangList from './LangList';
import EduList from './Edulist';
import EmpHistory from './EmpHistory';


const Template2 = (props) => {
          
  return (
    <div className="fullpage2" ref={props.objGetData.ref}>

        <div className="template" >
            <div id="top_name">
                <p id="firstname">{props.objSetData.firstname }</p>
                <p id="lastname">{ props.objSetData.lastname}</p>
            </div>
            <div className="content">
            <div className="personaldetails">
                <p id="occupation">{props.objSetData.occupation}</p>
                <p id="city">{props.objSetData.city}</p>
                <p id="gamil">{props.objSetData.email}</p>
                <p id="phone">{props.objSetData.phone}</p>
            </div>
            <div className="Summary">
                <h3>Summary</h3>
                <p id="summ">{props.objSetData.profile}</p>
            </div>

            <div className="Summary">
                <h3>Experience</h3>

                <div className="exp">
                    <p id="employer">
                    <EmpHistory emps={props.objSetData.empHistory} emptitle={props.objSetData.empTitle} onDeleteTodo={props.objGetData.handleDeleteEmp}/>
                    </p>
                </div>
            </div>
            <div className="Summary">
                <h3>Education</h3>
                <div className="edu">
                      <EduList todos={props.objSetData.eduList} onDeleteTodo={props.objGetData.handleDeleteEdu}/>
                </div>
            </div>


            <div className="Summary">
                <h3>Skills</h3>
					<TaskList  todos={props.objSetData.todos} onDeleteTodo={props.objGetData.handleDeleteTodo}/>
            </div>

            <div className="Summary">
                <h3>Languages</h3>
                <LangList  todos={props.objSetData.langList} onDeleteTodo={props.objGetData.handleDeleteLanguage} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Template2