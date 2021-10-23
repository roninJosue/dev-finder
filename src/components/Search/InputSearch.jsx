import React from "react"

const InputSearch = (props) => {
  const {placeHolder, search, setSearch} = props
  return (
    <div className='search'>
      <i className='fa fa-search search_icon' />
      <input
        className='search-input'
        placeholder={placeHolder}
        type="text"
        value={search}
        onChange={({target: {value}}) => {
          setSearch(value)
        }}
      />
    </div>
  )
}

export default InputSearch