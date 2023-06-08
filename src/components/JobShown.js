import React from 'react'
import '../static/jobshown.css'

const JobShown = ({myDatas}) => {      
  let count = 1;
  return (
  <div >
  
      {(myDatas.length==0)?(<h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>Nothing to display</h1>):(
      myDatas.map((val)=>{
            return(<List key={myDatas.length} job={val} count={count++} />)
      })
      
    )
}
    </div> 
  )
   
}

const List = ({job,count}) => {

  return (
    <div className='job-list' >
        <h5 id='h5-left'>{count}.</h5>
        <div> 
          <h5>Title </h5><span>{job.title}</span>
        </div>
    
        <div><h5>Skill</h5><span>{job.skill}</span></div>
        <h5>Url</h5><span  id='url-span'><a href={job.url} target='_blank'>{job.url}</a></span>
      </div>
  )
}





export default JobShown;

