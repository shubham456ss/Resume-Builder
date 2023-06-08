import React,{Fragment} from 'react'
import PersonalDetail from './PersonalDetail'
import ProfessionalSummary from './ProfessionalSummary'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Language from './Language'
import Skill from './Skill'

const Resume = ({objGetData,objSetData}) => {
  return (
    <Fragment>
              <PersonalDetail objGetData={objGetData} />

              <ProfessionalSummary objGetData={objGetData} />

              <Education objGetData={objGetData} objSetData={objSetData}/>

              <EmploymentHistory objGetData={objGetData}  />
              
              <Skill objGetData={objGetData} objSetData={objSetData} />

              <Language objGetData={objGetData} objSetData={objSetData} />
    </Fragment>
  )
}

export default Resume