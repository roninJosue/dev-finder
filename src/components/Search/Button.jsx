import React from "react"

const Button = ({text, onClick}) => {
  return(
    <button
      className='search-button'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
