import React, { useState } from "react"

const InputSearch = (props) => {
  const { placeHolder } = props
  return (
    <div className='input-search'>
      <i className='fa fa-search input-search_icon'></i>
      <input placeholder={placeHolder} type="text"/>
    </div>
  )
}

export default InputSearch