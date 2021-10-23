import React from "react"

const Avatar = ({avatar_url}) => {
  return(
    <div className="user-avatar">
      <img className='user-img' src={avatar_url} alt="avatar"/>
    </div>
  )
}

export default Avatar