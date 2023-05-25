import { useContext } from 'react'
import { IconGithub, IconGmail, IconLinkedin } from '../../assets/icons'
import { DarkmodeContext } from '../../context/darkMode'
import './footer.css'

function Footer (): JSX.Element {
  const { darkMode } = useContext(DarkmodeContext)
  return (
    <footer>
      <nav id='contact-me'>
        <ul
          aria-label='secondary navigation group - social media'
          className={`dark-mode${darkMode ? '-active' : '-inactive'}`}
        >
          <li><button aria-label='email'><a href='mailto:guillesafran@gmail.com'><IconGmail width={'30px'} height={'30px'}/></a></button></li>
          <li><button aria-label='github'><a href='https://github.com/Guille-Sanchez'><IconGithub width={'30px'} height={'30px'}/></a></button></li>
          <li><button aria-label='linkedin'><a href='https://www.linkedin.com/in/guillermo-sanchez-developer/'><IconLinkedin width={'30px'} height={'30px'}/></a></button></li>
        </ul>
      </nav>
      <p aria-label='Author'><em>Guillermo Sanchez</em></p>
    </footer>
  )
}

export default Footer
