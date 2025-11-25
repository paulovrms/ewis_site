const Projects = () => {
  const projects = [
    {
      title: "Automação de Linha de Produção - Indústria Alimentícia",
      img: "assets/jpeg/project-mockup-example.jpeg",
      link: "./project-1.html"
    },
    {
      title: "Modernização de Painéis Elétricos - Siderúrgica",
      img: "assets/jpeg/project-mockup-example.jpeg",
      link: "./project-2.html"
    },
    {
      title: "Sistema SCADA e Supervisão - Tratamento de Água",
      img: "assets/jpeg/project-mockup-example.jpeg",
      link: "./project-3.html"
    }
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
          {projects.map((proj, index) => (
            <div className="projects__row" key={index}>
              <div className="projects__row-img-cont">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{proj.title}</h3>
                <p className="projects__row-content-desc">
                  Projeto completo de automação e integração, entregue dentro do prazo
                  e com total aprovação do cliente.
                </p>
                <a
                  href={proj.link}
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver Case
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects