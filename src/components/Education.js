import React from 'react'

const Education = (props) => {
  
  return (
    <div >
             
                <div className='row'>
                <h2>Education</h2>
                </div>
                <div >

                  <label htmlFor="lastname" className="form-label">Qualification Level</label>
                 
                <div><input type="text"className="form-control"
                  value={props.objSetData.edu}  
                  onChange={e => props.objGetData.setEdu(e.target.value)}/>
                </div>
                
                <div className="col mt-3">
                  <button type="button" class="btn btn-success" 
                    onClick={() => {
                    props.objGetData.setEdu('');
                    props.objGetData.handleAddEdu(props.objSetData.edu)}}>
                      Add</button>
                  </div>

                 </div><hr />
    </div>
  )
}


export default Education