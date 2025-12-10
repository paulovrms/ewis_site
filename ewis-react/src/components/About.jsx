const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Sobre a EWIS</span>
          <span className="heading-sec__sub">
            A EWIS é especializada em soluções industriais de alta performance,
            oferecendo projetos personalizados com foco em eficiência,
            durabilidade e inovação para o setor industrial.
          </span>
        </h2>

        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Quem somos</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Somos uma empresa brasileira dedicada ao desenvolvimento de{' '}
                <strong>soluções industriais sob medida</strong>. Trabalhamos com
                automação, integração de sistemas, fabricação de painéis e
                equipamentos especiais, sempre buscando a máxima qualidade e
                satisfação do cliente.
              </p>
              <p className="about__content-details-para">
                Com vasta experiência no mercado industrial, nossa equipe está
                preparada para transformar desafios em soluções eficientes.
                Fale conosco — será um prazer ajudar no seu próximo projeto.
              </p>
            </div>
            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">
              Entre em contato
            </a>
          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">Principais competências</h3>
            <div className="skills">
              <div className="skills__skill">Automação Industrial</div>
              <div className="skills__skill">CLPs e IHMs</div>
              <div className="skills__skill">Painéis Elétricos</div>
              <div className="skills__skill">Integração de Sistemas</div>
              <div className="skills__skill">Projetos Elétricos</div>
              <div className="skills__skill">Manutenção Industrial</div>
              <div className="skills__skill">Consultoria Técnica</div>
              <div className="skills__skill">Start-up de Máquinas</div>
              <div className="skills__skill">Supervisório SCADA</div>
              <div className="skills__skill">Redes Industriais</div>
              <div className="skills__skill">Indústria 4.0</div>
              <div className="skills__skill">NR-12</div>
              <div className="skills__skill">Retrofit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About