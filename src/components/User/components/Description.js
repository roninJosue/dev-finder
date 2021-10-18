import React from "react"
import Bio from "./Bio";

const Description = () => {
  return(
    <>
      <div className='user-description'>
        <div style={{
          flexBasis: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          <div className='user-wrap'>
            <h1 className='user-name'>Reynaldo Cano</h1>
            <h2 className='user-login'>@roninJosue</h2>
          </div>
          <div className='user-joinedat'>
            joined at 10/15/2021
          </div>
        </div>
        <Bio />
      </div>
    </>
  )
}

export default Description