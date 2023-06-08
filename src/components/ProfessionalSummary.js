import React from 'react'

const ProfessionalSummary = (props) => {
  return (
  <div >
      <div className='row'>
        <h2  style={props.h1Style}>Professional Summary</h2>

        {/* <p >quick summary about overall experiance</p> */}
      </div>

      <div>
        <label htmlFor="exampleFormControlTextarea1" class="form-label">Summary</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" onChange={(e)=>(props.objGetData.setProfile(e.target.value))}></textarea>
      </div>  
      <br />
  </div>
  )
}

export default ProfessionalSummary