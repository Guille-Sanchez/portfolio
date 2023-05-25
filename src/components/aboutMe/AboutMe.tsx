import './aboutMe.css'

function AboutMe (): JSX.Element {
  return (
    <section className='section-about-me'>
      <div className='about-me' id='about-me'>
        <h1>Guillermo Sánchez</h1>
        <p>
          Front-End Developer with experience in creating responsive websites in React.
        </p>
        <p>
          Typically, I implement raw HTML/CSS and JavaScript with React in the client side;
          however, there are times in which I prefer using TypeScript and TailwindCSS in my projects.
        </p>
      </div>

      <article className='technologies-container'>
        <header><h2>Technologies</h2></header>
        <div className='technologies-list'>
          <img className='technology-icon' src="./css-3-svgrepo-com.svg" alt="CSS logo" />
          <img className='technology-icon' src="./html-5-svgrepo-com.svg" alt="HTML logo" />
          <img className='technology-icon' src="./tailwind-svgrepo-com.svg" alt="Tailwind logo" />
          <img className='technology-icon' src="./figma-svgrepo-com.svg" alt="Figma logo" />
          <img className='technology-icon' style={{ borderRadius: '10px' }} src="./javascript-svgrepo-com.svg" alt="JavaScript logo" />
          <img className='technology-icon' src="./typescript-svgrepo-com.svg" alt="Typescript logo" />
          <img className='technology-icon' src="./python-svgrepo-com.svg" alt="Python logo" />
          <img className='technology-icon' src="./ruby-svgrepo-com.svg" alt="Ruby logo" />
          <img className='technology-icon' src="./mongodb-svgrepo-com.svg" alt="MongoDB logo" />
          <img className='technology-icon' src="./express-svgrepo-com.svg" alt="Express logo" />
          <img className='technology-icon' src="./react.svg" alt="React logo" />
          <img className='technology-icon' src="./node-js-svgrepo-com.svg" alt="Node.js logo" />
          <img className='technology-icon' src="./redux-svgrepo-com.svg" alt="Redux logo" />
          <img className='technology-icon' src="./jest-svgrepo-com.svg" alt="Jest logo" />
          <img className='technology-icon' src="./git-svgrepo-com.svg" alt="Git logo" />
          <img className='technology-icon' src="./github-142-svgrepo-com.svg" alt="Github logo" />
        </div>
      </article>
    </section>
  )
}

export default AboutMe
