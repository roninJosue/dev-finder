import React from "react"

const Statistics  = ({followers, following, repos}) => {
  return(
    <div className='user-statistics'>
      <Count label={'Repos'} number={repos} />
      <Count label={'Followers'} number={followers} />
      <Count label={'Following'} number={following} />
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
