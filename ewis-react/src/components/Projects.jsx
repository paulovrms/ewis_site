import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Automação de Linha de Produção - Indústria de Fertilizantes',
      img: '/assets/jpeg/project-mockup-example.jpeg',
    },
    {
      id: 2,
      title: 'Modernização de Painéis Elétricos - Siderúrgica',
      img: '/assets/jpeg/project-mockup-example.jpeg',
    },
    {
      id: 3,
      title: 'Sistema SCADA e Supervisão - Tratamento de Água',
      img: '/assets/jpeg/project-mockup-example.jpeg',
    },
  ]

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projetos</span>
          <span className="heading-sec__sub">
            Alguns dos trabalhos que já realizamos com sucesso para nossos clientes
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((proj) => (
            <div className="projects__row" key={proj.id}>
              <div className="projects__row-img-cont">
                <img src={proj.img} alt={proj.title} className="projects__row-img" loading="lazy" />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{proj.title}</h3>
                <p className="projects__row-content-desc">
                  Projeto completo de automação e integração, entregue dentro do prazo
                  e com total aprovação do cliente.
                </p>
                <Link to={`/projects/${proj.id}`} className="btn btn--med btn--theme dynamicBgClr">
                  Ver Case
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects