import React from "react"
import Bio from "./Bio";
import {dateFormat} from "../../../utils/date";

const Description = ({name, login, created_at, bio}) => {
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
            <h1 className='user-name'>{name}</h1>
            <h2 className='user-login'>@{login}</h2>
          </div>
          <div className='user-joinedat'>
            joined {dateFormat(created_at)}
          </div>
        </div>
        <Bio bio={bio} />
      </div>
    </>
  )
}

export default Description