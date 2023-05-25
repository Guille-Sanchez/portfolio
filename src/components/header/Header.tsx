import './header.css'
import { IconSun, IconMoon } from '../../assets/icons.jsx'
import { useContext } from 'react'
import { DarkmodeContext } from '../../context/darkMode'

function Header (): JSX.Element {
  const { darkMode, setDarkMode } = useContext(DarkmodeContext)
  return (
    <header>
      <div>
        <div className={`dark-mode${darkMode ? '-active' : '-inactive'}`}>
          <button
            aria-label='toggle dark mode'
            onClick={() => {
              setDarkMode((prev) => !prev)
            }}>
            {darkMode ? <IconSun width={'30px'} height={'30px'}/> : <IconMoon width={'30px'} height={'30px'}/>}
          </button>
        </div>
        <nav>
          <ul aria-label='primary navigation group' className={`dark-mode${darkMode ? '-active' : '-inactive'}`}>
            <li><a href='#about-me'>About me</a></li>
            <li><a href='#my-projects'>Projects</a></li>
            <li><a href='#contact-me'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
