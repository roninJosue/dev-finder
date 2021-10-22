import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faMapMarkerAlt, faLink, faBuilding} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

library.add(faMapMarkerAlt, faLink, faBuilding, faTwitter)

console.log(library)

const Contact = (props) => {
  return (
    <div className='user-contact'>
      <SocialMedia icon={faMapMarkerAlt} text='asdasdasadadasdasdasd'/>
      <SocialMedia icon={faTwitter} text='asdasdasadadasdasdasd'/>
      <SocialMedia icon={faLink} text='asdasdasadadasdasdasd'/>
      <SocialMedia icon={faBuilding} text='asdasdasadadasdasdasd'/>
    </div>
  )
}

const SocialMedia = ({icon, text}) => {
  return (
    <div className='user-social'>
      <span className='user-social-icon'>
        <FontAwesomeIcon icon={icon}/>
      </span>
      <span className='user-social-text'>{text}</span>
    </div>
  )
}

export default Contact