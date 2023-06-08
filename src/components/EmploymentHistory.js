import React, { useState } from 'react'

const EmploymentHistory = (props) => {

    const [hist,setHist]=useState('');
    const [histTitle,setHistTitle]=useState('');


    return (
        <div >
            <div className='row'>
            <h2 >Employement History</h2>
            </div>
                <label htmlFor="histtitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="histtitle" value={histTitle} onChange={e=>setHistTitle(e.target.value)}/>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">summary</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={hist} rows="3" onChange={e=>setHist(e.target.value)}></textarea>
                </div>
            
             <div Style={{display:'block',width:'100px'}} ><button  type="button" className="btn btn-success" 
                    onClick={() => {
                            setHistTitle('');
                            setHist('');
                            props.objGetData.handleAddEmp(histTitle,hist);
                  }}>Add</button>
             </div>
            <br />
        </div>
    )
}

export default EmploymentHistory
