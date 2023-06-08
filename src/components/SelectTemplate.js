import React,{useState} from 'react'
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import '../static/SelectTemplate.css';

const SelectTemplate = (props) => {

  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    setCheckedTwo(false);
    setCheckedThree(false);
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    setCheckedOne(false);
    setCheckedThree(false);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
    setCheckedOne(false);
    setCheckedTwo(false);
  };

  return (
<div style = {{background:"#CCCCCC",width:'100%',height:'100%'}} >

        <div  style={{display:'block',textAlign:'center',fontSize:'20px',fontWeight:'600',border:'solid black',borderWidth:'0 0 2px 0',padding:'10px 0 10px 0'}}>Select Template</div>

          <div className='one234'>
              <div className='temps'  onClick={handleChangeOne} >one</div>
              <div className='temps' onClick={handleChangeTwo} >Two</div>
              <div className='temps' onClick={handleChangeThree}>Three</div>
          </div>
        
          
          { checkedOne    && <Template1 objSetData={props.objSetData} objGetData={props.objGetData} />}
          { checkedTwo    && <Template2 objSetData={props.objSetData} objGetData={props.objGetData} />}
          { checkedThree  && <Template3 objSetData={props.objSetData} objGetData={props.objGetData} />}

        <div className='download-button' onClick={props.objGetData.handleGeneratePdf} >Download</div>

    </div> 
  )
}
export default SelectTemplate