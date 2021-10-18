import React, { useState } from "react"

const InputSearch = (props) => {
  const { placeHolder } = props
  return (
    <div className='search'>
      <i className='fa fa-search search_icon'/>
      <input className='search-input' placeholder={placeHolder} type="text"/>
    </div>
  )
}

export default InputSearch