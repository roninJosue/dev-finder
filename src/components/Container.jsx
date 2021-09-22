import React from "react"

const Container = (props) => {
  return (
    <div className='dev-container'>
      {props.children}
    </div>
  )
}

export default Container