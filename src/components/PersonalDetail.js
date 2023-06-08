
import React,{useState,useRef} from 'react'
import '../static/Details.css'

const PersonalDetail = (props) => {
  
  const [isClicked,setIsClicked]=useState(false)


  return (
    <React.Fragment>  
      <div  >

              <div className="row ">
              <h2 >Personal Detail</h2>
              <div className='col'>
                  <label htmlFor="firstName" className="form-label" >FirstName</label>
                  <input type="text" className="form-control" id="firstName"  onChange={(e)=>(props.objGetData.setFirstname(e.target.value))} />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="col">
                  <label htmlFor="lastname" className="form-label">Lastname</label>
                  <input type="text" className="form-control" id="lastname" onChange={(e)=>(props.objGetData.setLastname(e.target.value))} />
              </div>
              </div>
             
              <div className='row'>
              <div className="col">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email"  aria-describedy="emailHelp" onChange={(e)=>(props.objGetData.setEmail(e.target.value))}/>
              </div>
              <div className="col">
                  <label htmlFor="phone-number" className="form-label">Phone number</label>
                  <input type="tel" className="form-control" id="phone-number"  onChange={(e)=>(props.objGetData.setPhone(e.target.value))}/>
                  {/* <input type="text" className="form-control" id="phone-number"  onChange={(e)=>(props.objGetData.setPhone(e.target.value))}/> */}
              </div>
              </div>
              <div className="mb-3">
                  <label htmlFor="occupation" className="form-label">Occupation</label>
                  <input type="text" className="form-control" id="Occupation" onChange={(e)=>(props.objGetData.setOccupation(e.target.value))}/>
              </div>
              <div className="mb-3">
                <label htmlFor="choose-image" class="form-label">Choose Image</label>
                <input class="form-control" type="file"  id="choose-image" onChange={props.objGetData.onImageChange}/>
              </div>
               
              <div  >
                <h6 style={{display:'block',margin:'auto',width:'100px',color:'white',borderRadius:'2px',backgroundColor:'rgb(34, 75, 240)',
                    cursor:'pointer',padding:'2px',textAlign:'center'}} onClick={()=>{setIsClicked(!isClicked);}}>Add More</h6>
                {isClicked && (<><div className="mb-3">
                  <hr style={props.hr}/>
                <label htmlFor="Country" className="form-label">Country</label>
                <input type="text" className="form-control" id="Country"   onChange={(e)=>(props.objGetData.setCountry(e.target.value))}/>
                </div><div className="mb-3">
                  <label htmlFor="City" className="form-label">City</label>
                  <input type="text" className="form-control" id="City"   onChange={(e)=>(props.objGetData.setCity(e.target.value))}/>
                </div><div className="mb-3">
                  <label htmlFor="Address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="Address"   onChange={(e)=>(props.objGetData.setAddress(e.target.value))}/>
                </div><div className="mb-3">
                  <label htmlFor="Postal_Code" className="form-label">Postal Code</label>
                  <input type="text" className="form-control" id="Postal_Code"   onChange={(e)=>(props.objGetData.setPostal(e.target.value))}/>
                </div>
                </>)}
                </div>
                <br />
      </div>    
    </React.Fragment>
  )
}

export default PersonalDetail