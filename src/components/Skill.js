import React from 'react'

const Skill = (props) => {

  function addSkills(e){
    props.objGetData.setSkill1(
        {
          title:e.target.value,
        }
    )
  }
  return (
    <React.Fragment>
      <div >

      <div className='row'>
             <h2 >Skills</h2>
            </div>
                {/* <p>Quick summary about overall experiance</p> */}
                <label for="skill-name" className="form-label">Skill Name</label>
                
                <div className='row'>
                  <div class="col">
                    <input type="text"className="form-control" id="skill-name" 
                      placeholder="Add Skills"
                      value={props.objSetData.skill1.title}  
                      onChange={addSkills}
                    />
                  </div>
                  <div class="col"><button type="button" class="btn btn-success" 
                    onClick={() => {
                    props.objGetData.setSkill1({title:''});
                    props.objGetData.handleAddTodo(props.objSetData.skill1.title);
                  }}>Add</button>
                  </div>
                  </div><br />
                </div>
    </React.Fragment>
  );
}

export default Skill
