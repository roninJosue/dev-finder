import React, {useState} from "react"

const Theme = () => {
  const [theme, setTheme] = useState('light')

  const handleClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  return (
    <button onClick={handleClick} className='dev-header__theme'>
      {theme}
      <i className={`dev-header__icon fa ${theme === 'light' ? 'fa-sun-o' : 'fa-moon-o'}`}></i>
    </button>
  )
}

export default Theme
