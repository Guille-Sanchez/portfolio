import { useContext, useId } from 'react'
import './projectsGrid.css'
import { DarkmodeContext } from '../../context/darkMode'

function ProjectsGrid (): JSX.Element {
  // screenshots iphone 12/13 mini
  const myProjects = [
    {
      body: 'An easy to use e-commerce website. It connects to an API and allows user to filter the products by price and category.',
      image: './e-commerce-with-api.png',
      title: 'E-commerce',
      urlLive: 'https://ecommerce-chichodev.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/e-commerce-with-API'
    },
    {
      body: 'A work-in-progress carpooling open-source project that students from Facultad Politécnica de la Universidad Nacional de Asunción could use.',
      image: './poli-movil .png',
      title: 'PoliMovil',
      urlLive: 'https://polimovil.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/poliMovil'
    },
    {
      body: 'This website allows users to search for information of any country they want. It also has a theme switcher for better user experience.',
      image: './rest-countries-api.png',
      title: 'REST Countries API ',
      urlLive: 'https://countries-api-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/countries-api'
    },
    {
      body: 'Perform mathmatical operations like addition, subtraction, multiplication, and division with this simple calculator.',
      image: './calculator-app.png',
      title: 'Calculator App',
      urlLive: 'https://calculator-app-chichodev.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/calculator'
    },
    {
      body: 'This e-commerce product card website is all about design. This projects shows a good eye for details and user experience.',
      image: './e-commerce.png',
      title: 'Product card',
      urlLive: 'https://e-commerce-chichodev.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/e-commerce'
    },
    {
      body: 'This project features a controlled form for a greater user experience as well as some sorting mechanisms.',
      image: './buscador-de-peliculas.png',
      title: 'Movie Search Website',
      urlLive: 'https://buscador-de-peliculas-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/buscador-de-peliculas'
    },
    {
      body: 'Insert a url and shorten it! This website saves your shortened-link on local-storage so you never lose it.',
      image: './url-shortener.png',
      title: 'Url Shortener',
      urlLive: 'https://url-shortener-vite-app.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/url-shortner'
    },
    {
      body: 'Bored? This website gives you a random piece of art and tries to guess the artist nationality.',
      image: './get-art-piece.png',
      title: 'Get Art Piece',
      urlLive: 'https://art-from-the-art-institute-of-chicago.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/DisplayArt'
    },
    {
      body: 'Manage Company\'s homepage. This project presents small details which put together bring a good user experience.',
      image: './manage.png',
      title: 'Manage\'s homepage',
      urlLive: 'https://glittering-lamington-b0ab80.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/manage-landing-page'
    },
    {
      body: 'Ever wonder what the current transaction for a given currency is? Well, now you can quickly check it on this website.',
      image: './bank-exchange.png',
      title: 'Currency Exhange',
      urlLive: 'https://bank-exchange-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/bank_exchange'
    },
    {
      body: 'Do you have some spare time to kill with a friend? Why don\'t you use it to play the classic game of tic-tac-toe?',
      image: './tic-tac-toe.png',
      title: 'Tic-Tac-Toe',
      urlLive: 'https://tic-tac-toe-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/Tic-Tac-Toe'
    }
  ]
  const projectId = useId()
  const { darkMode } = useContext(DarkmodeContext)

  return (
    <section id='my-projects' className='section-projects'>
      <h2 className='h2-projects'>Projects</h2>
      <div className='container-project-grid'>
        <div className='project-grid'>
          {myProjects.map((project, index) => {
            return (
              <div key={`${projectId}-${index}`} className={`card-dark-mode${darkMode ? '-active' : '-inactive'}`}>
                <div className='card'>
                  <p className='title'>{project.title}</p>
                  <img src={project.image} alt={project.title} />
                  <p className='body'>{project.body}</p>
                  <div className='btn-group'>
                    <button style={{ all: 'unset' }}><a href={project.urlrepo} className='repository'>Repository</a></button>
                    <button style={{ all: 'unset' }}><a href={project.urlLive} className='live-demo'>Live Demo</a></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
