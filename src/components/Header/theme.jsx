import React, {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faSun)

const Theme = () => {
  const [theme, setTheme] = useState('light')

  const handleClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  return (
    <button onClick={handleClick} className='dev-header__theme'>
      <Icon
        text={theme === 'dark' ? 'light' : 'dark'}
        icon={theme === 'dark' ? 'sun' : 'moon'}
      />
    </button>
  )
}

const Icon = ({icon, text}) => {
  return (
    <>
      <span>{text}</span>
      <FontAwesomeIcon icon={icon} className='dev-header__theme-icon'/>
    </>
  )
}

export default Theme
