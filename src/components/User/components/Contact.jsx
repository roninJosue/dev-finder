import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faMapMarkerAlt, faLink, faBuilding} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

library.add(faMapMarkerAlt, faLink, faBuilding, faTwitter)


const Contact = ({location, blog, twitter_username, company}) => {
  return (
    <div className='user-contact'>
      <SocialMedia icon={faMapMarkerAlt} text={location}/>
      <SocialMedia icon={faTwitter} text={twitter_username}/>
      <SocialMedia icon={faLink} text={blog}/>
      <SocialMedia icon={faBuilding} text={company}/>
    </div>
  )
}

const SocialMedia = ({icon, text}) => {
  return (
    <div className='user-social'>
      <span className='user-social-icon'>
        <FontAwesomeIcon icon={icon}/>
      </span>
      <span className='user-social-text'>{
        text ? text : 'Not Available'
      }</span>
    </div>
  )
}

export default Contact