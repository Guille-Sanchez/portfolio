import './workExperience.css'

export const WorkExperience = (): JSX.Element => {
  return (
    <section className='section-work-experience'>
      <article className='work-experience'>
        <header><h1>Work Experience</h1></header>
        <p>
          Web Developer - Seguridad Seguros <span>(July 2023 - Present)</span>
        </p>
        <div>
          <p>Activities and achievements:</p>
          <ul>
            <li>Enhancing web functionality and constant bug resolution.</li>
            <li>Improving web performance, accessibility, and security.</li>
            <li>Achieved a milestone success by placing the company website in the top google search results.</li>
            <li>Managing website content updates via Content Management System (CMS).</li>
            <li>Assisting technology migration projects.</li>
            <li>Developing mobile applications and providing internal user support.</li>
            <li>Collecting project requirements and management of cross-functional teams using agile methodologies.</li>
          </ul>
        </div>
      </article>
    </section>
  )
}
