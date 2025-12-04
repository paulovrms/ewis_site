import { useEffect } from 'react'; // Adicione isso para importar o useEffect
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ProjectDetail = () => {
  // Use params para ID do projeto; aqui, simule dados ou fetch se necessário.
  // Por enquanto, use dados hard-coded; em produção, use context ou API.
  const { id } = useParams()
  const projects = {
    1: {
      title: 'Automação de Linha de Produção - Projeto Internacional',
      description: 'Programação de CLP, desenvolvimento de sistema SCADA e projeto de painéis elétricos para linha de fertilizantes no Paquistão, serviço B2B prestado a empresa parceira.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['Automação Industrial', 'Allen Bradley', 'Rockwell Automation', 'Alfa Instrumentos', 'Adisra SCADA', 'PostgreSQL'],
    },
    2: {
      title: 'Automação de maquinario industrial',
      description: 'Projeto completo de painéis elétricos, desenvolvimento de automação com CLP + IHM WEG e integração com rede modbus para um sistema de peneiramento industrial, serivço B2B prestado a empresa parceira.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['Painéis Elétricos', 'WEG', 'Weintek','NR-12', 'ISA-101'],
    },
    3: {
      title: 'Painéis elétricos industriais',
      description: 'Cuidado em cada detalhe no projeto e montagem de painéis elétricos industriais, seguindo normas NR-10 e NR-12, para garantir segurança e eficiência em instalações industriais.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['NBR-61439', 'NBR-5410', 'CCM', 'QGBT', 'NR-10', 'NR-12'],
    },
  }

  const project = projects[id] || { title: 'Projeto Não Encontrado', description: '', img: '', skills: [], liveLink: '', codeLink: '' }

  // Reset scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // [] significa: roda só uma vez, ao montar o componente

  return (
    <>
      <Header />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project.description}</p>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img src={project.img} alt={project.title} className="project-details__showcase-img" />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Descrição do Projeto</h3>
                <p className="project-details__desc-para">{project.description}</p>
                {/* Adicione mais parágrafos se necessário */}
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Ferramentas Usadas</h3>
                <div className="skills">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="skills__skill">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectDetail