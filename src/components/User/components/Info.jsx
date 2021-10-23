import React from "react"
import Avatar from "./Avatar";
import Description from "./Description";

const Info = ({avatar_url, name, login, created_at, bio}) => {
  return (
    <div className='user-info'>
      <Avatar
        avatar_url={avatar_url}
      />
      <Description
        name={name}
        login={login}
        created_at={created_at}
        bio={bio}
      />
    </div>
  )
}

export default Info
