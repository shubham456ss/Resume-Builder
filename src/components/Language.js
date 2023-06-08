import React from 'react'

const Language = (props) => {
  return (
    <div >
    
    <div className=" row">
      <h2  style={props.h1Style}>Languages</h2>
    
    <label for="language" className="form-label">Language</label>

    <div className='col'><input type="text"className="form-control" id="language"  placeholder="Add Languages"
      value={props.objSetData.lang}  
      onChange={e => props.objGetData.setLang(e.target.value)}
    />
    </div>
    <div class="col"><button type="button" class="btn btn-success" 
        onClick={() => {
        props.objGetData.setLang('');
        props.objGetData.handleAddLanguage(props.objSetData.lang);
    }}>Add</button>
  </div>
  </div><br/>
  </div>
  )
}

export default Language