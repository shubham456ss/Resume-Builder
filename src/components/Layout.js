import React from 'react'
import Resume from './Resume'
import SelectTemplate from './SelectTemplate'
import Split from 'react-split-it';
import '../static/outer.css';

const Layout = ({objSetData,objGetData,filt}) => {
  return (
    <div className='outer'>
      <Split
          sizes={[50, 50]}
          minSize={500}
          expandToMin={true}
          gutterSize={15}
          gutterAlign="center"
          snapOffset={0}
          dragInterval={50}
          direction="horizontal"
          cursor="col-resize"
      > 
        <div style={{padding:'20px'}}>
          <Resume objGetData={objGetData} objSetData={objSetData}/>
        </div>
          
          
          {/* <JobShown myDatas={filt} skill1={skill1}/> */}
          <SelectTemplate objSetData={objSetData} objGetData={objGetData}/>

      </Split>
      

    </div>
        
  )
}

export default Layout