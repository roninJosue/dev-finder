import React from "react"

const Statistics  = () => {
  return(
    <div className='user-statistics'>
      <Count label={'Repos'} number={'8'} />
      <Count label={'Followers'} number={'3938'} />
      <Count label={'Folowing'} number={'9'} />
    </div>
  )
}

const Count = ({label, number}) => {
  return(
    <div className='user-statistics-count'>
      <span className='user-statistics-label'>{label}</span>
      <span className='user-statistics-number'>{number}</span>
    </div>
  )
}

export default Statistics
