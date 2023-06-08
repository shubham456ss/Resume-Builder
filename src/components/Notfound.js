import React from 'react'

const Notfound = () => {
  return (
    <div style={NOTFOUND}>
        <div >
        <h1>Error 404 ! </h1>
        </div>
        <h3 >Page not found</h3>
    </div>
  )
}

const NOTFOUND={
    display:'flex',
    flexDirection:'column',
    height:'100vh',
    justifyContent:'center',
    alignItem:'center',
    textAlign:'center',
    fontFamily:'inherit',
    fontSize:'80px',
}
export default Notfound