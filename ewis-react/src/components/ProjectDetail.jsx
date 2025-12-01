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
      title: 'Automação de Linha de Produção - Indústria Alimentícia',
      description: 'Projeto completo de automação e integração, entregue dentro do prazo e com total aprovação do cliente.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['Automação Industrial', 'CLPs e IHMs', 'Integração de Sistemas'],
      liveLink: '#', // Substitua por link real
      codeLink: '#', // Substitua por link real
    },
    2: {
      title: 'Modernização de Painéis Elétricos - Siderúrgica',
      description: 'Modernização completa de painéis, melhorando eficiência e segurança.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['Painéis Elétricos', 'Projetos Elétricos', 'NR-12'],
      liveLink: '#',
      codeLink: '#',
    },
    3: {
      title: 'Sistema SCADA e Supervisão - Tratamento de Água',
      description: 'Implementação de sistema SCADA para monitoramento remoto.',
      img: '/assets/jpeg/project-mockup-example.jpeg',
      skills: ['Supervisório SCADA', 'Indústria 4.0', 'Redes Industriais'],
      liveLink: '#',
      codeLink: '#',
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