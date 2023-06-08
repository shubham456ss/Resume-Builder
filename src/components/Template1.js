import React from 'react'
import '../static/temp1.css'
import chris from './chris.jpg';
import TaskList from './TaskList'
import LangList from './LangList';
import EduList from './Edulist';
import EmpHistory from './EmpHistory';

const Template = (props) => {

  
  return (
	<div className="fullpage" >

		<div  className="margin-page" ref = { props.objGetData.ref }>

			<div id="inner">
	
				<div className="yui-gc">
					<div className="heading">
						<img style={{  margin:'2px',float:'right',width:'100px',height:'100px' ,border:'2px solid black'}} src={props.objSetData.image || chris} alt='User-Profile-pic' />
						<h1 >{props.objSetData.firstname }</h1>
						<h1 >{ props.objSetData.lastname}</h1>
						<h1 >{props.objSetData.occupation}</h1>
						
					</div>
					<div className="inner-box-model">
						<div className="contact-info">
							
							<h3><a href="mailto:name@yourdomain.com">{props.objSetData.email}</a></h3>
							<h3>{props.objSetData.phone}</h3>
						</div>
					</div>	
					</div>			
				
				</div>

				<div className="main2">

					<div className="level2">
						<div className="left">
							<h1>Profile</h1>
						</div>
						<div className='right'>{props.objSetData.profile}</div>
					</div>

					<div className="level2">
						<div className="left" >
							<h1>Skills</h1>
						</div>
							<div className='right'>
							<TaskList  todos={props.objSetData.todos} onDeleteTodo={props.objGetData.handleDeleteTodo}/>
							</div>
					</div>

					<div className="level2">
	
						<div className="left">
							<h1>Experience</h1>
							
							
						</div>
						<div className="right">
								<EmpHistory emps={props.objSetData.empHistory} emptitle={props.objSetData.empTitle} onDeleteTodo={props.objGetData.handleDeleteEmp}/>
						</div>
						
					</div>
				
					<div className="level2">
						<div className="left">
							<h1>Education</h1>
						</div>
							<div className='right'>
							<EduList todos={props.objSetData.eduList} onDeleteTodo={props.objGetData.handleDeleteEdu}/>
							</div>
						</div>
			
					 </div>
				
					 <div className='level2'>
					 <div className="left"><h1>Languages</h1></div>
						<div className='right'>
							<LangList todos={props.objSetData.langList} onDeleteTodo={props.objGetData.handleDeleteLanguage}/>
					 </div>
					
				 </div>
		
			
				<div id="footer">
					<p>{props.objSetData.firstname} <code>&mdash;</code> <a href="mailto:name@yourdomain.com">{props.objSetData.email}</a><code>&mdash;</code>{props.objSetData.phone}</p>
			</div>
		</div>
	</div>
  )
}


export default Template;
